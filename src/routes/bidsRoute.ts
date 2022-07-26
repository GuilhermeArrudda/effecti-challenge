import { Router } from 'express'
import * as bidsController from '../controllers/bidsController.js'

const bidsPostedRouter = Router()

bidsPostedRouter.get('/bids/:progress/:id', bidsController.getBids)

export default bidsPostedRouter