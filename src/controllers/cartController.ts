import { Request, Response } from 'express'

let cart: { productId: number; quantity: number }[] = []

export const addToCart = (req: Request, res: Response): void => {
	const { productId, quantity } = req.body
	const itemIndex = cart.findIndex(item => item.productId === productId)

	if (itemIndex > -1) {
		cart[itemIndex].quantity += quantity
	} else {
		cart.push({ productId, quantity })
	}

	res.json({ message: 'Item added to cart', cart })
}

export const getCart = (_req: Request, res: Response): void => {
	res.json(cart)
}

export const clearCart = (_req: Request, res: Response): void => {
	cart = []
	res.json({ message: 'Cart cleared' })
}

