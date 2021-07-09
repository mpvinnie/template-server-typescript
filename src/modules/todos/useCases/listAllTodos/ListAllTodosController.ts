import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAllTodosUseCase } from './ListAllTodosUseCase'

export class ListAllTodosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTodos = container.resolve(ListAllTodosUseCase)

    const todos = await listAllTodos.execute()

    console.log('testesteste')

    return response.status(200).json({ todos })
  }
}
