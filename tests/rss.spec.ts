/**
 * Tests for sitemap
 *
 * Created November 20th, 2023
 * @author ywarezk
 * @license MIT
 * @version 0.30.0
 */

import {test, expect} from '@playwright/test'
 
test('sitemap', async ({page, request}) => {
  const response = await request.get('http://localhost:3000/api/rss.xml')
	expect(response.status()).toBe(200)
	
	// expect response content type to be application/xml
	const contentType = response.headers()['content-type']
	expect(contentType).toBe('application/xml')
})