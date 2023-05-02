import { Entity } from '../../core/entities/entity'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(name: string) {
    const instructor = new Instructor({ name })

    return instructor
  }
}
