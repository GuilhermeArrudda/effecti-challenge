import 'express-async-errors'
import './setup.js'
import express, { json } from 'express'
import cors from 'cors'
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js'


const app = express()
app
	.use(json())
	.use(cors())
	.use(errorHandlerMiddleware)
	.get('/health', (_req, res) => res.send('OK!'))

export default app
