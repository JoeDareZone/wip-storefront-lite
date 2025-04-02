import { Request, Response } from 'express'
import prisma from '../utils/db'

export const addToCart = async (req: Request, res: Response): Promise<void> => {
	try {
		const { productId, quantity } = req.body

		const existingItem = await prisma.cartItem.findFirst({
			where: { productId },
		})

		let updatedItem
		if (existingItem) {
			updatedItem = await prisma.cartItem.update({
				where: { id: existingItem.id },
				data: { quantity: existingItem.quantity + quantity },
			})
		} else {
			updatedItem = await prisma.cartItem.create({
				data: { productId, quantity },
			})
		}

		res.status(200).json(updatedItem)
	} catch (error) {
		console.error('Error adding to cart:', error)
		res.status(500).json({ error: 'Failed to add to cart' })
	}
}

export const getCart = async (_req: Request, res: Response): Promise<void> => {
	try {
		const cart = await prisma.cartItem.findMany({
			include: { product: true },
		})
		res.status(200).json(cart)
	} catch (error) {
		console.error('Error fetching cart:', error)
		res.status(500).json({ error: 'Failed to fetch cart' })
	}
}

export const clearCart = async (
	_req: Request,
	res: Response
): Promise<void> => {
	try {
		await prisma.cartItem.deleteMany()
		res.status(200).json({ message: 'Cart cleared' })
	} catch (error) {
		console.error('Error clearing cart:', error)
		res.status(500).json({ error: 'Failed to clear cart' })
	}
}
