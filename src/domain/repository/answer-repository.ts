import { Answer } from '../entities/anwser'

export interface AnswerRepository {
  create(answer: Answer): Promise<void>
}
