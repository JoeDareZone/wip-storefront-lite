const getProducts = (req, res) => {
	const products = [
		{ id: 1, name: 'Canvas Jacket', price: 120 },
		{ id: 2, name: 'Work Pants', price: 80 },
		{ id: 3, name: 'Utility Vest', price: 95 },
	]
	res.json(products)
}

module.exports = { getProducts }
