import { TodosRepositoryInMemory } from '@modules/todos/repositories/in-memory/TodosRepositoryInMemory'

import { CreateTodoUseCase } from '../createTodo/CreateTodoUseCase'
import { ListAllTodosUseCase } from './ListAllTodosUseCase'

let todosRepository: TodosRepositoryInMemory
let createTodo: CreateTodoUseCase
let listAllTodos: ListAllTodosUseCase
describe('ListAllTodos', () => {
  beforeEach(() => {
    todosRepository = new TodosRepositoryInMemory()
    createTodo = new CreateTodoUseCase(todosRepository)
    listAllTodos = new ListAllTodosUseCase(todosRepository)
  })

  it('should be able to list all todos', async () => {
    await createTodo.execute({
      title: 'todo1'
    })

    await createTodo.execute({
      title: 'todo2'
    })

    const todos = await listAllTodos.execute()

    expect(todos[0].title).toEqual('todo1')
    expect(todos[1].title).toEqual('todo2')
  })
})
