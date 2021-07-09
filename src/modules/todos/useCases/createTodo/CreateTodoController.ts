import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateTodoUseCase } from './CreateTodoUseCase'

export class CreateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body

    const createTodo = container.resolve(CreateTodoUseCase)

    const todo = await createTodo.execute({ title })

    return response.status(201).json(todo)
  }
}
