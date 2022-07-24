import supertest from 'supertest'
import app from '../../src/app.js'

describe('App tests', () => {

	describe('GET /health', () => {
		it('should return status 200', async () => {
			const result = await supertest(app).get('/health')

			expect(result.status).toEqual(200)
		})
	})
})