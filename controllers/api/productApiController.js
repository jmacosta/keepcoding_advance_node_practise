import { Product } from '../../Models/Product.js';
export class ProductApiController {
  async getAll(req, res) {
    const filterByName = req.query.name;
    const filterByTag = req.query.tags;
    const filterBySellOrSearch = req.query.sellOrSearch;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const skip = req.query.start;

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
    res.locals.title = 'Nodepop';
    try {
      const products = await Product.getAll({ filter, sort, limit, skip });
      res.locals.products = products;
      res.json(products);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }

  async create(req, res) {
    const productData = req.body;

    try {
      const newProduct = await Product.create(productData);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }
  async getTags(req, res) {
    return res.json(await Product.getTags());
  }
  async delete(req, res) {}
  async patch(req, res) {}
  async getById(req, res) {
    const id = req.params.id;
    console.log(`el id es ${id}`);
    try {
      const product = await Product.getById(id);
      if (product) return res.json(product);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Not found' });
    }
  }
}
