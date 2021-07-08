import 'reflect-metadata'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../../../../swagger.json'
import { appRoutes } from './routes'

import '../typeorm'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(appRoutes)

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})
