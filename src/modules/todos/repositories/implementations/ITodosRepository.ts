import { ICreateTodoDTO } from '../../dtos/ICreateTodoDTO'
import { Todo } from '../../infra/typeorm/entities/Todo'

export interface ITodosRepository {
  create(data: ICreateTodoDTO): Promise<Todo>
  listAll(): Promise<Todo[]>
}
