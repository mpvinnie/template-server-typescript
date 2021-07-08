import { Request, Response } from 'express'

import { TodosRepository } from '../../infra/typeorm/repositories/TodosRepository'
import { CreateTodoUseCase } from './CreateTodoUseCase'

const todosRepository = new TodosRepository()

export class CreateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body

    const createTodo = new CreateTodoUseCase(todosRepository)

    const todo = await createTodo.execute({ title })

    return response.status(201).json(todo)
  }
}
