/**
 * test academeez homepage
 *
 * Created August 17th, 2025
 * @author ywarezk
 * @license MIT
 */

import { test, expect } from './fixtures/coverage';

test.describe('homepage', () => {
	test('bug - image on LessonCard in locale', async ({ page }) => {
		await page.goto('/he');
		// All lesson thumbnails on the page
		const thumbs = page.getByTestId('lesson-thumbnail');
		const count = await thumbs.count();
		expect(count).toBeGreaterThan(0);
	});
});
