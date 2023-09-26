import {test, expect} from '@playwright/test'

/**
 * checks the title in the homepage
 */
test('has title', async ({page}) => {
  await page.goto('http://localhost:3000')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('academeez | Open Source Learning Platform for Coders')
})

/**
 * check the title in the course page
 */
test('course page has title', async ({page}) => {
  await page.goto('http://localhost:3000/he/course/react')
  await expect(page).toHaveTitle('academeez | Courses | React')
})
