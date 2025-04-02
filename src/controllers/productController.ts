import { Request, Response } from 'express'
import prisma from '../utils/db'

export const getProducts = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const products = await prisma.product.findMany()
		res.json(products)
	} catch (error) {
		console.error('Error fetching products:', error)
		res.status(500).json({ error: 'Failed to fetch products' })
	}
}
