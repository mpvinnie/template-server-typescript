import { Todo } from '../../infra/typeorm/entities/Todo'
import { ITodosRepository } from '../../repositories/implementations/ITodosRepository'

interface IRequest {
  title: string
}

export class CreateTodoUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({ title }: IRequest): Promise<Todo> {
    const todo = await this.todosRepository.create({ title })

    return todo
  }
}
