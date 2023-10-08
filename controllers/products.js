import { Product } from '../Models/Product.js';
export class productController {
  static async getAll(req, res) {
    const filterByName = req.query.name;
    const filterByTag = req.query.tags;
    const filterBySellOrSearch = req.query.sellOrSearch;
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
    const products = await Product.getAll({ filter });
    res.json(products);
  }

  static async create(req, res) {}
  static async getTags(req, res) {}
  static async delete(req, res) {}
  static async patch(req, res) {}
  static async getById(req, res) {
    const { id } = req.params;
    const product = await Product.getById({ id });
    if (product) return res.json(product);
    res.status(404).json({ message: 'Product not found' });
  }
}
