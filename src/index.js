const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const productRoutes = require('./routes/products')
app.use('/products', productRoutes)

app.get('/', (req, res) => {
	res.send('WIP Storefront Lite is running')
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
