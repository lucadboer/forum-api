import { Entity } from '../../core/entities/entity'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(name: string) {
    const student = new Student({
      name,
    })

    return student
  }
}
