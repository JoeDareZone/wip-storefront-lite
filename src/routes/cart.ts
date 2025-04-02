import express from 'express'
import { addToCart, clearCart, getCart } from '../controllers/cartController'

const router = express.Router()

router.get('/', getCart)
router.post('/add', addToCart)
router.post('/clear', clearCart)

export default router
