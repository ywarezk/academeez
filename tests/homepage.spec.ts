/**
 * test academeez homepage
 *
 * Created August 17th, 2025
 * @author ywarezk
 * @license MIT
 */

import { test, expect } from '@playwright/test';

test('courses link', async ({ page }) => {
	await page.goto('/');
	const link = page.getByTestId('courses-link');
	const href = await link.getAttribute('href');
	expect(href).not.toBeNull();
	const response = await page.request.get(href!);
	expect(response.status()).not.toBe(404);
	expect(response.ok()).toBeTruthy();
});
