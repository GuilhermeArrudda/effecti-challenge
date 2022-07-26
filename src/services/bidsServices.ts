import { launch } from 'puppeteer'

interface Params {
	id: string;
	progress: string
}

export async function getBids(params: Params) {
	
	const url = `
	https://www.bombinhas.sc.gov.br/licitacoes/index/rotear/categoria/pregao/situacao/${params.progress}/actionDestino/listar/codMapaItem/11152/pagina/${params.id}
	`
	
	const browser = await launch()
	const page = await browser.newPage()
	await page.goto(url)
	
	const bids = await page.evaluate((params: Params) => {
		const nodeList = document.querySelectorAll('.item-lista li')
		
		const existingNextPage = document.querySelector('.paginaAtiva a')
				
		const liArray = [...nodeList]
		const pageNumber = [existingNextPage]
		
		if(pageNumber[0] !== null){
			if(pageNumber[0].innerHTML !== params.id){
				throw new Error('not_found')
			} 
		} else if (params.id !== '1') {
			throw new Error('not_found')
		}

		// eslint-disable-next-line prefer-const
		let list = liArray
		const count = 3

		if(list.length < 10) {
			for(let i = 1; i <= count; i++) {
				list.pop()
			}
		} else {
			while(list.length > 10) {
				list.pop()
			}
		}
		
		const bids = list.map((h) => ({
			html: h.innerHTML
		}))
		
		return bids
	}, params)
	await browser.close()

	return JSON.stringify(bids, null, 2)
}
