import { Todo } from '../../infra/typeorm/entities/Todo'
import { ITodosRepository } from '../../repositories/implementations/ITodosRepository'

export class ListAllTodosUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute(): Promise<Todo[]> {
    const todos = await this.todosRepository.listAll()

    return todos
  }
}
