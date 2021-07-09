import { v4 as uuid } from 'uuid'

import { ICreateTodoDTO } from '@modules/todos/dtos/ICreateTodoDTO'
import { Todo } from '@modules/todos/infra/typeorm/entities/Todo'

import { ITodosRepository } from '../ITodosRepository'

export class TodosRepositoryInMemory implements ITodosRepository {
  private todos: Todo[] = []

  async create({ title }: ICreateTodoDTO): Promise<Todo> {
    const todo = new Todo()

    Object.assign(todo, {
      id: uuid(),
      title,
      created_at: Date.now()
    })

    this.todos.push(todo)

    return todo
  }

  async listAll(): Promise<Todo[]> {
    return this.todos
  }
}
