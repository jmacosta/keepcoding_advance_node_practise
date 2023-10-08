import { Product } from '../Models/Product.js';
export class productController {
  static async getAll(req, res) {
    const filterByName = req.query.name;
    const filterByTag = req.query.tags;
    const filterBySellOrSearch = req.query.sellOrSearch;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const skip = req.query.start;

    const filter = {};
    if (filterByName) {
      filter.name = filterByName;
    }
    if (filterByTag) {
      filter.tags = { $in: filterByTag };
    }
    if (filterBySellOrSearch) {
      filter.sellOrSearch = filterBySellOrSearch;
    }
    const products = await Product.getAll({ filter, sort, limit, skip });
    res.json(products);
  }

  static async create(req, res) {
    const productData = req.body;

    try {
      const newProduct = await Product.create(productData);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }
  static async getTags(req, res) {
    return res.json(await Product.getTags());
  }
  static async delete(req, res) {}
  static async patch(req, res) {}
  static async getById(req, res) {
    const id = req.params.id;
    console.log(`el id es ${id}`);
    const product = await Product.getById(id);
    if (product) return res.json(product);
    res.status(404).json({ message: 'Product not found' });
  }
}
