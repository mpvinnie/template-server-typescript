import { inject, injectable } from 'tsyringe'

import { ICreateTodoDTO } from '@modules/todos/dtos/ICreateTodoDTO'
import { Todo } from '@modules/todos/infra/typeorm/entities/Todo'
import { ITodosRepository } from '@modules/todos/repositories/ITodosRepository'

@injectable()
export class CreateTodoUseCase {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository
  ) {}

  async execute({ title }: ICreateTodoDTO): Promise<Todo> {
    const todo = await this.todosRepository.create({ title })

    return todo
  }
}
