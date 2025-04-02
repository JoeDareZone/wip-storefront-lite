import { Request, Response } from 'express'

export const checkout = (req: Request, res: Response): void => {
	// integrate Adyen or Stripe here
	res.json({ message: 'Checkout initiated', orderId: Date.now() })
}
