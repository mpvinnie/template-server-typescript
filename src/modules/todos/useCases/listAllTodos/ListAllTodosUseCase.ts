import { inject, injectable } from 'tsyringe'

import { Todo } from '@modules/todos/infra/typeorm/entities/Todo'
import { ITodosRepository } from '@modules/todos/repositories/ITodosRepository'

@injectable()
export class ListAllTodosUseCase {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository
  ) {}

  async execute(): Promise<Todo[]> {
    const todos = await this.todosRepository.listAll()

    return todos
  }
}
