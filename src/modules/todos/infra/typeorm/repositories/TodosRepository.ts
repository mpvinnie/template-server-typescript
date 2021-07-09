import { getRepository, Repository } from 'typeorm'

import { ICreateTodoDTO } from '../../../dtos/ICreateTodoDTO'
import { ITodosRepository } from '../../../repositories/ITodosRepository'
import { Todo } from '../entities/Todo'

export class TodosRepository implements ITodosRepository {
  private repository: Repository<Todo>

  constructor() {
    this.repository = getRepository(Todo)
  }

  async create({ title }: ICreateTodoDTO): Promise<Todo> {
    const todo = this.repository.create({
      title
    })

    await this.repository.save(todo)

    return todo
  }

  async listAll(): Promise<Todo[]> {
    return await this.repository.find()
  }
}
