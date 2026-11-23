/**
 * E2E tests for the Explore Panel
 *
 * Created January 2025
 * @author ywarezk
 * @license MIT
 */

import { test, expect } from '../fixtures/coverage';

test.describe('Explore Panel', () => {
	test('opens and displays courses with actual content', async ({ page }) => {
		await page.goto('/');

		// Hover over the Explore button to open the panel
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await expect(exploreButton).toBeVisible();
		await exploreButton.hover();

		// Wait for the panel to open
		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Check that the panel is visible and has dimensions
		const panelBox = await panel.boundingBox();
		expect(panelBox).not.toBeNull();
		if (panelBox) {
			// Panel should have width and height
			expect(panelBox.width).toBeGreaterThan(0);
			expect(panelBox.height).toBeGreaterThan(0);
		}

		// Check that course list is visible
		const courseList = page.getByTestId('course-list');
		await expect(courseList).toBeVisible();

		// Check that courses are displayed horizontally
		const courseItems = page.getByTestId('course-item');
		const count = await courseItems.count();
		expect(count).toBeGreaterThan(0);

		// Verify courses are arranged horizontally
		// Note: course-list is the Carousel wrapper (relative positioning)
		// The actual flex container is CarouselContent (a child element)
		const carouselContent = courseList.locator('> div > div'); // Carousel > div (overflow-hidden) > div (CarouselContent with flex)
		const contentStyles = await carouselContent.evaluate((el) => {
			const styles = window.getComputedStyle(el);
			return {
				display: styles.display,
				flexDirection: styles.flexDirection,
			};
		});
		expect(contentStyles.display).toBe('flex');
		expect(contentStyles.flexDirection).toBe('row');

		// Check that at least one course has a link
		const firstCourse = courseItems.first();
		// Get the first link (course link), not lesson links
		const courseLink = firstCourse.locator('a').first();
		await expect(courseLink).toBeVisible();
		const href = await courseLink.getAttribute('href');
		expect(href).not.toBeNull();
		expect(href).toMatch(/\/courses\//);
	});

	test('closes panel when mouse leaves the panel', async ({ page }) => {
		await page.goto('/');

		// Open the panel by hovering over the button
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.hover();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Get panel position
		const panelBox = await panel.boundingBox();
		expect(panelBox).not.toBeNull();

		if (panelBox) {
			const viewportSize = page.viewportSize();
			expect(viewportSize).not.toBeNull();

			if (viewportSize) {
				// First, move mouse into the panel (center of the panel)
				const panelCenterX = panelBox.x + panelBox.width / 2;
				const panelCenterY = panelBox.y + panelBox.height / 2;
				await page.mouse.move(panelCenterX, panelCenterY);

				// Wait for panel to be visible and stable (mouse enter should keep it open)
				await expect(panel).toBeVisible();

				// Now move mouse outside the panel
				// Calculate a position definitely outside the panel
				// Move to bottom of viewport (panel maxHeight is 90vh, so bottom should be outside)
				const mouseY = Math.min(viewportSize.height - 10, panelBox.y + panelBox.height + 50);
				await page.mouse.move(viewportSize.width / 2, mouseY);
			}
		}

		// Wait for panel to close - expect.not.toBeVisible() has built-in waiting
		// It will wait up to the timeout for the panel to become hidden
		await expect(panel).not.toBeVisible();
	});

	test('displays courses horizontally in a scrollable list', async ({ page }) => {
		await page.goto('/');

		// Open the panel by hovering over the button
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.hover();

		const courseList = page.getByTestId('course-list');
		await expect(courseList).toBeVisible();

		// Verify courses are arranged horizontally
		// The CarouselContent (child of course-list) is the actual flex container
		const carouselContent = courseList.locator('> div > div'); // Carousel > div (overflow-hidden) > div (CarouselContent with flex)
		const listStyles = await carouselContent.evaluate((el) => {
			const styles = window.getComputedStyle(el);
			return {
				flexDirection: styles.flexDirection,
				display: styles.display,
			};
		});
		expect(listStyles.display).toBe('flex');
		expect(listStyles.flexDirection).toBe('row');

		// Verify carousel navigation arrows are present
		// The carousel uses arrows for navigation, not CSS overflow scrolling
		// The buttons have sr-only text "Previous slide" and "Next slide"
		const prevButton = courseList.getByRole('button', { name: /previous/i });
		const nextButton = courseList.getByRole('button', { name: /next/i });
		await expect(prevButton).toBeVisible();
		await expect(nextButton).toBeVisible();
	});
});

test.describe('Explore Panel - Large Course List', () => {
	test('handles large list of courses with horizontal scrolling', async ({ page }) => {
		// This test verifies that the panel can handle many courses
		await page.goto('/');

		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.hover();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		const courseList = page.getByTestId('course-list');
		await expect(courseList).toBeVisible();

		// Verify multiple courses are displayed
		const courseItems = page.getByTestId('course-item');
		const count = await courseItems.count();
		expect(count).toBeGreaterThan(0);

		// Verify carousel items don't shrink (CarouselItem has shrink-0 class)
		// Check the CarouselItem elements (parent of course-item)
		const carouselItems = courseList.locator('[role="group"][aria-roledescription="slide"]');
		const carouselItemCount = await carouselItems.count();
		expect(carouselItemCount).toBe(count); // Should match course-item count

		// Verify at least one carousel item has correct flex properties
		if (carouselItemCount > 0) {
			const firstItemStyles = await carouselItems.first().evaluate((el) => {
				const styles = window.getComputedStyle(el);
				return {
					flexShrink: styles.flexShrink,
				};
			});
			// CarouselItem should have shrink-0 (flex-shrink: 0)
			expect(firstItemStyles.flexShrink).toBe('0');
		}

		// Verify carousel navigation is available when there are multiple courses
		if (count > 1) {
			const nextButton = courseList.getByRole('button', { name: /next/i });
			await expect(nextButton).toBeVisible();
		}
	});

	test('maintains panel layout with many courses', async ({ page }) => {
		await page.goto('/');

		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.hover();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Verify panel has proper dimensions and respects max height
		const viewportSize = page.viewportSize();
		expect(viewportSize).not.toBeNull();

		if (viewportSize) {
			const panelBox = await panel.boundingBox();
			expect(panelBox).not.toBeNull();
			if (panelBox) {
				// Panel should have full width
				expect(panelBox.width).toBeGreaterThanOrEqual(viewportSize.width - 10);
				// Panel height should not exceed 90% of viewport (maxHeight constraint)
				const maxExpectedHeight = viewportSize.height * 0.9;
				expect(panelBox.height).toBeLessThanOrEqual(maxExpectedHeight + 10);
			}
		}

		// Verify course list doesn't break layout
		const courseList = page.getByTestId('course-list');
		const listBox = await courseList.boundingBox();
		expect(listBox).not.toBeNull();
	});
});
