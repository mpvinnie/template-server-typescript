import { container } from 'tsyringe'

import { TodosRepository } from '../../modules/todos/infra/typeorm/repositories/TodosRepository'
import { ITodosRepository } from '../../modules/todos/repositories/implementations/ITodosRepository'

container.registerSingleton<ITodosRepository>(
  'TodosRepository',
  TodosRepository
)
