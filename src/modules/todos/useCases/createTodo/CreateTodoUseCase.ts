import { inject, injectable } from 'tsyringe'

import { Todo } from '../../infra/typeorm/entities/Todo'
import { ITodosRepository } from '../../repositories/ITodosRepository'

interface IRequest {
  title: string
}

@injectable()
export class CreateTodoUseCase {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository
  ) {}

  async execute({ title }: IRequest): Promise<Todo> {
    const todo = await this.todosRepository.create({ title })

    return todo
  }
}
