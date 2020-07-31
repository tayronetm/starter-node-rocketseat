const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
	async list(req, res) {
		// PAGINATE: PRIMEIRO PARAMENTO É O FILTRO E O SEGUNDO
		// A PAGINA ATUAL E O LIMITE DE ITEMS A SER EXIBIDO
		// QUERY PARAM
		const { page = 1 } = req.query;
		const products = await Product.paginate({ }, { page, limit: 10});
		return res.json(products);
	},

	async show(req, res) {
		const product = await Product.findById(req.params.id);
		return res.json(product);
	},

	async create(req, res) {
		const product = await Product.create(req.body);
		return res.json(product);
	},

	async update(req, res) {
		const product = await Product
		.findByIdAndUpdate(req.params.id, req.body, { new: true })
		return res.json(product);
	},

	async destroy(req, res) {
		Product.findByIdAndRemove(req.params.id);
		return res.send();
	}
}