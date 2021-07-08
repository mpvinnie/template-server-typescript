import { Router } from 'express'

import { CreateTodoController } from '../../../useCases/createTodo/CreateTodoController'
import { ListAllTodosController } from '../../../useCases/listAllTodos/ListAllTodosController'

export const todosRoutes = Router()

const createTodoController = new CreateTodoController()
const listAllTodosController = new ListAllTodosController()

todosRoutes.post('/', createTodoController.handle)
todosRoutes.get('/', listAllTodosController.handle)
