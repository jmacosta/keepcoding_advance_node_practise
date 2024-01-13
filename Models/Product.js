import ProductModel from '../Schemas/productsSchema.js';
import UserModel from '../Schemas/usersSchema.js';
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
  static async addOwner(products, user) {
    const userBD = await Product.getByEmail(user);
    const owner = userBD._id.toHexString();
    const productsWithOwner = products.map(product => ({ ...product, owner }));
    return productsWithOwner;
  }

  async insertMany(products, user) {
    const productsWithOwner = await Product.addOwner(products, user);
    try {
      const result = await ProductModel.insertMany(productsWithOwner);
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
  static async getByEmail(email) {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      console.error('User not found ', error);
    }
  }
}
