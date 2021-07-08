import { v4 as uuid } from 'uuid'

import { ICreateTodoDTO } from '../../../dtos/ICreateTodoDTO'
import { ITodosRepository } from '../../../repositories/implementations/ITodosRepository'
import { Todo } from '../entities/Todo'

export class TodosRepository implements ITodosRepository {
  private todos: Todo[]

  constructor() {
    this.todos = []
  }

  public async create({ title }: ICreateTodoDTO): Promise<Todo> {
    const todo = new Todo()

    Object.assign(todo, {
      id: uuid(),
      title,
      created_at: new Date()
    })

    this.todos.push(todo)

    return todo
  }

  public async listAll(): Promise<Todo[]> {
    return this.todos
  }
}
