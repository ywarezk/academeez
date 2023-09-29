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
 * check the title in the course page for hebrew
 */
test('course page has title he', async ({page}) => {
  await page.goto('http://localhost:3000/he/course/react')
  await expect(page).toHaveTitle('academeez | קורסים | React')
})

/**
 * check the title in the course page for hebrew
 */
test('course page has title en', async ({page}) => {
  await page.goto('http://localhost:3000/course/react')
  await expect(page).toHaveTitle('academeez | Academeez courses | React')
})
