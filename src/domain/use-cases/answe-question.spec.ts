import { beforeEach, describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { InMemmoryAnswerRepository } from '../repository/in-memmory/in-memmory-answer-repository'

let answerRepository: InMemmoryAnswerRepository

describe('Answer Question Use Case', () => {
  beforeEach(() => {
    answerRepository = new InMemmoryAnswerRepository()
  })

  it('should be able to answer a question', async () => {
    const answerQuestion = new AnswerQuestionUseCase(answerRepository)

    const { content } = await answerQuestion.execute({
      instructorId: 'instructor',
      questionId: 'question',
      content: 'test response',
    })

    expect(content).toEqual('test response')
  })
})
