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

	test('open source project card links to vscode-code-highlight GitHub repo', async ({ page }) => {
		await page.goto('/');

		const projectLink = page.getByRole('link', { name: /vscode-code-highlight/i });
		await expect(projectLink).toBeVisible();

		const [response] = await Promise.all([
			page.waitForEvent('response', (res) =>
				res.url().startsWith('https://github.com/ywarezk/vscode-code-highlight')
			),
			projectLink.click(),
		]);

		expect(response.status()).toBeLessThan(400);
		expect(page.url()).toContain('https://github.com/ywarezk/vscode-code-highlight');
	});
});
