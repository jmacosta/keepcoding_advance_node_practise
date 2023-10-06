import { randomUUID } from 'node:crypto';
import { readJson } from '../utils.js';
const products = readJson('./data/products.json');
const productsWithId = products.map(product => {
  return { id: randomUUID(), ...product };
});
export class ProductModel {
  // to do bd statics methods
  static async getAll() {
    return productsWithId;
  }
  static async getTags() {}
  static async create() {}
  // not required
  static async update() {}
  static async delete() {}
  static async getById({ id }) {
    const product = productsWithId.find(product => product.id === id);
    return product;
  }
}
