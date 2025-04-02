import { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response): void => {
	const products = [
		{ id: 1, name: 'Canvas Jacket', price: 120 },
		{ id: 2, name: 'Work Pants', price: 80 },
		{ id: 3, name: 'Utility Vest', price: 95 },
	]

	res.json(products)
}
