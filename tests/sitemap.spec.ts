/**
 * Test the sitemap
 *
 * Created September 1st, 2025
 * @author ywarezk
 * @license MIT
 */

import { test, expect } from './fixtures/coverage';

test.describe('sitemap', () => {
	test('sitemap-index has 2 sitemaps and includes /sitemap-video.xml', async ({
		page,
		baseURL,
	}) => {
		const res = await page.goto('/sitemap-index.xml', { waitUntil: 'domcontentloaded' });
		expect(res, 'Response should exist').toBeTruthy();
		expect(res!.ok(), `Non-OK status: ${res?.status()}`).toBeTruthy();

		const xml = await res!.text();

		// Extract all <loc>...</loc> values (sitemaps should be absolute URLs)
		const locs = Array.from(xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)).map((m) => m[1]);

		// Assert exactly 2 sitemap entries
		expect(locs.length, `Found locs: ${JSON.stringify(locs, null, 2)}`).toBe(2);

		// Check one of them ends with /sitemap-video.xml (support absolute/relative)
		const hasVideo = locs.some((u) => {
			try {
				const url = new URL(u, baseURL ?? 'http://localhost');
				return url.pathname.endsWith('/sitemap-video.xml');
			} catch {
				return u.includes('/sitemap-video.xml');
			}
		});

		expect(hasVideo).toBe(true);
	});
});
