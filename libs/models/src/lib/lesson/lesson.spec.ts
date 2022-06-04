/**
 * Testing the lesson model
 *
 * Created June 4th, 2022
 * @author: ywarezk
 * @version: 0.1.0
 */

import { getLessons, lessonFilter } from './lesson.utils'
import { expect } from 'chai'

describe('lesson.model', () => {
  it('find is features', async function () {
    this.timeout(60000)
    const lessons = await getLessons()
    const lessLessons = lessonFilter(lessons, { isFeatured: true })
    expect(lessLessons.length > 0).to.equal(true)
  })
})
