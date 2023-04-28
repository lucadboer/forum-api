import { Answer } from '@/domain/entities/anwser'
import { AnswerRepository } from '../answer-repository'

export class InMemmoryAnswerRepository implements AnswerRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
