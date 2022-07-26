import { Request, Response } from 'express'
import * as bidsServices from '../services/bidsServices.js'

export async function getBids(req: Request, res: Response) {
	const { id, progress } = req.params

	const params = {id, progress}

	const bids = await bidsServices.getBids(params)

	res.send(bids).status(200)
}