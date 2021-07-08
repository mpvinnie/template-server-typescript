import { Router } from 'express'

import { todosRoutes } from '../../../../modules/todos/infra/http/routes/todos.routes'

export const appRoutes = Router()

appRoutes.use('/todos', todosRoutes)
