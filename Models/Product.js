import ProductModel from '../Schemas/productsSchema.js';
export class Product {
  // to do bd statics methods
  async getAll({ filter, skip, limit, sort }) {
    const query = ProductModel.find(filter);
    query.skip(skip);
    query.sort(sort);
    query.limit(limit);
    return query.exec();
  }
  async getTags() {
    const tags = { tags: ['work', 'lifestyle', 'mobile', 'motor'] };
    return tags;
  }
  async create(input) {
    const newProduct = new ProductModel(input);
    await newProduct.save();
    return newProduct;
  }
  async deleteMany() {
    try {
      const result = await ProductModel.deleteMany();
      console.log(`Se eliminaron ${result.deletedCount} documentos.`);
      return result;
    } catch (error) {
      console.error('Error al eliminar documentos:', error);
      throw error;
    }
  }

  async insertMany(products) {
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
  async update() {}
  async delete() {}
  async getById(id) {
    const product = ProductModel.find({ _id: id });
    return product;
  }
}
