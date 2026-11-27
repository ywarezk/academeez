/**
 * Tests for a single lesson (course) page.
 *
 * @license MIT
 */

import { test, expect } from './fixtures/coverage';

const COMMIT_EMAIL_PRIVACY_PATH = '/courses/github/commit-email-privacy';
const EXPECTED_EDIT_HREF =
	'https://github.com/Nerdeez/academeez/edit/main/src/content/docs/courses/github/commit-email-privacy.mdx';

/** Same repo path as the edit link, checkable without a browser session on github.com. */
function editHrefToRawGithubUrl(editHref: string): string {
	return editHref.replace(
		/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/edit\/([^/]+)\//,
		'https://raw.githubusercontent.com/$1/$2/$3/'
	);
}

test.describe('lesson page', () => {
	test('edit link points at the lesson source on GitHub (no duplicated content path)', async ({
		page,
		request,
	}) => {
		await page.goto(COMMIT_EMAIL_PRIVACY_PATH);

		const editLink = page.getByRole('link', { name: 'Edit page' });
		await expect(editLink).toBeVisible();

		const href = await editLink.getAttribute('href');
		expect(href, 'edit link should point at lesson MDX on GitHub').toBe(EXPECTED_EDIT_HREF);
		expect(href).not.toMatch(/src\/content\/docs\/src\/content\/docs/);

		const rawUrl = editHrefToRawGithubUrl(href!);
		const response = await request.get(rawUrl);
		expect(response.status(), `lesson file should exist on GitHub (${rawUrl})`).toBe(200);
	});
});
