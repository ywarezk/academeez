/**
 * test academeez homepage
 *
 * Created August 17th, 2025
 * @author ywarezk
 * @license MIT
 */

import { test, expect } from './fixtures/coverage';

test.describe('homepage', () => {
	test('courses link', async ({ page }) => {
		await page.goto('/');
		const link = page.getByTestId('courses-link');
		const href = await link.getAttribute('href');
		expect(href).not.toBeNull();
		const response = await page.request.get(href!);
		expect(response.status()).not.toBe(404);
		expect(response.ok()).toBeTruthy();
	});

	test('bug - image on LessonCard in locale', async ({ page }) => {
		await page.goto('/he');
		// All lesson thumbnails on the page
		const thumbs = page.getByTestId('lesson-thumbnail');
		const count = await thumbs.count();
		expect(count).toBeGreaterThan(0);
	});
});
