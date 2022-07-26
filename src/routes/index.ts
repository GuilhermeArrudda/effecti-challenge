import { Router } from 'express'
import bidsPostedRouter from './bidsRoute.js'

const router = Router()

router.use(bidsPostedRouter)

export default router