import { describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { randomUUID } from 'crypto'

describe('Answer Question Use Case', () => {
  it('should be able to answer a question', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
      instructorId: randomUUID(),
      questionId: randomUUID(),
      content: 'test response',
    })

    expect(answer.content).toEqual('test response')
  })
})
