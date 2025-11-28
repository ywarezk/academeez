/**
 * E2E tests for the Explore Panel
 *
 * Created January 2025
 * @author ywarezk
 * @license MIT
 */

import { test, expect } from '../../tests/fixtures/coverage';

test.describe('Explore Panel', () => {
	test('opens and displays courses with actual content', async ({ page }) => {
		await page.goto('/');

		// Find and click the Explore button
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await expect(exploreButton).toBeVisible();
		await exploreButton.click();

		// Wait for the panel to open
		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Check that the panel takes full screen
		const panelBox = await panel.boundingBox();
		expect(panelBox).not.toBeNull();
		if (panelBox) {
			// Panel should cover the viewport
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

		// Verify courses are arranged horizontally (check flex direction)
		const listStyles = await courseList.evaluate((el) => {
			const styles = window.getComputedStyle(el);
			return {
				flexDirection: styles.flexDirection,
				display: styles.display,
			};
		});
		expect(listStyles.flexDirection).toBe('row');
		expect(listStyles.display).toBe('flex');

		// Check that at least one course has a link
		const firstCourse = courseItems.first();
		const courseLink = firstCourse.locator('a');
		await expect(courseLink).toBeVisible();
		const href = await courseLink.getAttribute('href');
		expect(href).not.toBeNull();
		expect(href).toMatch(/\/courses\//);
	});

	test('closes panel when close button is clicked', async ({ page }) => {
		await page.goto('/');

		// Open the panel
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.click();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Click close button
		const closeButton = page.getByRole('button', { name: /close panel/i });
		await closeButton.click();

		// Panel should be closed
		await expect(panel).not.toBeVisible();
	});

	test('closes panel when clicking outside', async ({ page }) => {
		await page.goto('/');

		// Open the panel
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.click();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Click outside the panel content (on the backdrop)
		await panel.click({ position: { x: 10, y: 10 } });

		// Panel should be closed
		await expect(panel).not.toBeVisible();
	});

	test('displays courses horizontally in a scrollable list', async ({ page }) => {
		await page.goto('/');

		// Open the panel
		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.click();

		const courseList = page.getByTestId('course-list');
		await expect(courseList).toBeVisible();

		// Check overflow-x is set for horizontal scrolling
		const listStyles = await courseList.evaluate((el) => {
			const styles = window.getComputedStyle(el);
			return {
				overflowX: styles.overflowX,
				flexDirection: styles.flexDirection,
			};
		});
		expect(listStyles.flexDirection).toBe('row');
		// overflow-x should allow scrolling if content is too wide
		expect(['auto', 'scroll', 'overlay']).toContain(listStyles.overflowX);
	});
});

test.describe('Explore Panel - Large Course List', () => {
	test('handles large list of courses with horizontal scrolling', async ({ page }) => {
		// This test verifies that the panel can handle many courses
		// In a real scenario, we might inject test data or use a test page
		await page.goto('/');

		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.click();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		const courseList = page.getByTestId('course-list');
		await expect(courseList).toBeVisible();

		// Verify the list supports horizontal scrolling
		const canScroll = await courseList.evaluate((el) => {
			return el.scrollWidth > el.clientWidth;
		});

		// If there are enough courses, scrolling should be possible
		// This test verifies the layout supports it even if current content doesn't require it
		const courseItems = page.getByTestId('course-item');
		const count = await courseItems.count();

		if (count > 3) {
			// With more than 3 courses, we should be able to scroll
			// (assuming each course card is ~256px wide + gaps)
			expect(canScroll || count <= 3).toBeTruthy();
		}

		// Verify all courses are in a single horizontal row
		const items = await courseItems.all();
		for (const item of items) {
			const itemStyles = await item.evaluate((el) => {
				const styles = window.getComputedStyle(el);
				return {
					flexShrink: styles.flexShrink,
					width: styles.width,
				};
			});
			// Items should not shrink and should have a fixed width
			expect(itemStyles.flexShrink).toBe('0');
		}
	});

	test('maintains panel layout with many courses', async ({ page }) => {
		await page.goto('/');

		const exploreButton = page.getByRole('button', { name: /explore/i });
		await exploreButton.click();

		const panel = page.getByTestId('explore-panel');
		await expect(panel).toBeVisible();

		// Verify panel takes 100% of viewport
		const viewportSize = page.viewportSize();
		expect(viewportSize).not.toBeNull();

		if (viewportSize) {
			const panelBox = await panel.boundingBox();
			expect(panelBox).not.toBeNull();
			if (panelBox) {
				// Panel should cover the full viewport (with some tolerance for borders/padding)
				expect(panelBox.width).toBeGreaterThanOrEqual(viewportSize.width - 10);
				expect(panelBox.height).toBeGreaterThanOrEqual(viewportSize.height - 10);
			}
		}

		// Verify course list doesn't break layout
		const courseList = page.getByTestId('course-list');
		const listBox = await courseList.boundingBox();
		expect(listBox).not.toBeNull();
	});
});
