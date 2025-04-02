import express, { Request, Response } from 'express'
import productRoutes from './routes/products'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/products', productRoutes)

app.get('/', (req: Request, res: Response) => {
	res.send('WIP Storefront Lite is running (TypeScript)')
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
