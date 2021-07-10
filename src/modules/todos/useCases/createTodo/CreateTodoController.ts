import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ICreateTodoDTO } from '@modules/todos/dtos/ICreateTodoDTO'
import { createTodoSchema } from '@modules/todos/schemas/createTodoSchema'
import validateParams from '@utils/validateParams'

import { CreateTodoUseCase } from './CreateTodoUseCase'

export class CreateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.body

    const validParams = validateParams(params, createTodoSchema)

    const { title } = validParams as ICreateTodoDTO

    const createTodo = container.resolve(CreateTodoUseCase)

    const todo = await createTodo.execute({ title })

    return response.status(201).json(todo)
  }
}
