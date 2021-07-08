import { Request, Response } from 'express'

import { TodosRepository } from '../../infra/typeorm/repositories/TodosRepository'
import { ListAllTodosUseCase } from './ListAllTodosUseCase'

const todosRepository = new TodosRepository()

export class ListAllTodosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTodos = new ListAllTodosUseCase(todosRepository)

    const todos = await listAllTodos.execute()

    return response.status(200).json(todos)
  }
}
