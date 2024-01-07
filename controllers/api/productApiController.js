import { Product } from '../../Models/Product.js';
export class ProductApiController {
  async getAll(req, res) {
    const filterByName = req.query.name;
    const filterByTag = req.query.tags;
    const filterBySellOrSearch = req.query.sellOrSearch;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const skip = req.query.start;
    const product = new Product();

    const filter = {};
    if (filterByName) {
      filter.name = new RegExp('^' + req.query.name, 'i');
    }
    if (filterByTag) {
      filter.tags = { $in: filterByTag };
    }
    if (filterBySellOrSearch) {
      filter.sellOrSearch = filterBySellOrSearch;
    }

    try {
      const products = await product.getAll({ filter, sort, limit, skip });
      res.locals.products = products;
      res.json(products);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
      next(error);
    }
  }

  async create(req, res) {
    const productData = req.body;
    const product = new Product();

    try {
      const newProduct = await product.create(productData);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }
  async getTags(req, res) {
    const product = new Product();
    return res.json(await product.getTags());
  }
  async delete(req, res) {}
  async patch(req, res) {}
  async getById(req, res) {
    const product = new Product();
    const id = req.params.id;
    console.log(`el id es ${id}`);
    try {
      const productElement = await product.getById(id);
      if (productElement) return res.json(productElement);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Item Not found' });
    }
  }
}
