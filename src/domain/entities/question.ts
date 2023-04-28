import { randomUUID } from 'node:crypto'

interface QuestionProps {
  id?: string
  content: string
  authorId: string
}

export class Question {
  public id: string
  public content: string
  public authorId: string

  constructor({ authorId, content, id }: QuestionProps) {
    this.id = id ?? randomUUID()
    this.content = content
    this.authorId = authorId
  }
}
