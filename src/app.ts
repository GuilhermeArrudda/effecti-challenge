import 'express-async-errors'
import './setup.js'
import express, { json } from 'express'
import cors from 'cors'
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js'
import router from './routes/index.js'


const app = express()
app
	.use(json())
	.use(cors())
	.get('/health', (_req, res) => res.send('OK!'))
	.use(router)
	.use(errorHandlerMiddleware)

export default app
