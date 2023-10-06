import { ProductModel } from '../Models/Product.js';
export class productController {
  static async getAll(req, res) {
    const products = await ProductModel.getAll();
    res.json(products);
  }

  static async create(req, res) {}
  static async delete(req, res) {}
  static async patch(req, res) {}
  static async getById(req, res) {
    const { id } = req.params;
    const product = await ProductModel.getById({ id });
    if (product) return res.json(product);
    res.status(404).json({ message: 'Product not found' });
  }
}
