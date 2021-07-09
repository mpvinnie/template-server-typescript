import { Router } from 'express'

import { CreateTodoController } from '@modules/todos/useCases/createTodo/CreateTodoController'
import { ListAllTodosController } from '@modules/todos/useCases/listAllTodos/ListAllTodosController'

export const todosRoutes = Router()

const createTodoController = new CreateTodoController()
const listAllTodosController = new ListAllTodosController()

todosRoutes.post('/', createTodoController.handle)
todosRoutes.get('/', listAllTodosController.handle)
