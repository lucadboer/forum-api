import { Answer } from '../entities/anwser'
import { AnswerRepository } from '../repository/answer-repository'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    questionId,
    instructorId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      authorId: instructorId,
      content,
      questionId,
    })

    await this.answerRepository.create(answer)

    return answer
  }
}
