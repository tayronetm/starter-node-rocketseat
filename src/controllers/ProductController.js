const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
	async index(req, res) {
		// BUSCAR REGISTROS NO MONGO
		const products = await Product.find();
		return res.json(products);
	}
}