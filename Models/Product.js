import ProductModel from '../Schemas/products.js';
export class Product {
  // to do bd statics methods
  static async getAll({ filter, skip, limit, sort }) {
    const query = ProductModel.find(filter);
    query.skip(skip);
    query.sort(sort);
    query.limit(limit);
    return query.exec();
  }
  static async getTags() {}
  static async create() {}
  static async deleteMany() {
    try {
      const result = await ProductModel.deleteMany();
      console.log(`Se eliminaron ${result.deletedCount} documentos.`);
      return result;
    } catch (error) {
      console.error('Error al eliminar documentos:', error);
      throw error;
    }
  }

  static async insertMany(products) {
    try {
      const result = await ProductModel.insertMany(products);
      console.log(`Se insertaron ${result.length} documentos.`);
      return result;
    } catch (error) {
      console.error('Error al insertar documentos:', error);
      throw error;
    }
  }
  // not required
  static async update() {}
  static async delete() {}
  static async getById({ id }) {
    const product = productsWithId.find(product => product.id === id);
    return product;
  }
}
