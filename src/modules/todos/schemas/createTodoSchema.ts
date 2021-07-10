import joi from 'joi'

import { ICreateTodoDTO } from '../dtos/ICreateTodoDTO'

export const createTodoSchema = joi.object<ICreateTodoDTO>({
  title: joi.string().required()
})
