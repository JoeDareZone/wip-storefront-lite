import express, { Request, Response } from 'express'
import cartRoutes from './routes/cart'
import checkoutRoutes from './routes/checkout'
import productRoutes from './routes/products'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)
app.use('/checkout', checkoutRoutes)

app.get('/', (req: Request, res: Response) => {
	res.send('WIP Storefront Lite is running (TypeScript)')
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
