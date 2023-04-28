import { randomUUID } from 'node:crypto'

interface AnswerProps {
  id?: string
  content: string
  questionId: string
  authorId: string
}

export class Answer {
  public id: string
  public content: string
  public questionId: string
  public authorId: string

  constructor({ id, authorId, content, questionId }: AnswerProps) {
    this.id = id ?? randomUUID()
    this.content = content
    this.questionId = questionId
    this.authorId = authorId
  }
}
