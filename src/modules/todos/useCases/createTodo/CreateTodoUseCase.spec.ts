import { TodosRepositoryInMemory } from '../../repositories/in-memory/TodosRepositoryInMemory'
import { CreateTodoUseCase } from './CreateTodoUseCase'

let todosRepository: TodosRepositoryInMemory
let createTodo: CreateTodoUseCase

describe('CreateTodo', () => {
  beforeEach(() => {
    todosRepository = new TodosRepositoryInMemory()
    createTodo = new CreateTodoUseCase(todosRepository)
  })
  it('should be able to create a new todo', async () => {
    const todo = await createTodo.execute({
      title: 'todo example'
    })

    expect(todo).toHaveProperty('id')
    expect(todo.title).toBe('todo example')
  })
})
