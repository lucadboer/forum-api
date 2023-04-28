import { expect, test } from 'vitest'
import { Slug } from './slug'

test('it should be able to create a slug formatted', () => {
  const slug = Slug.createFromText('QUEStiOn_For tést---___')

  expect(slug.value).toEqual('question-for-test')
})
