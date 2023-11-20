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
  const response = await request.get('http://localhost:3000/sitemap.xml')
	expect(response.status()).toBe(200)
})