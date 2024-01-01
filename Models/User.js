import UserModel from '../Schemas/usersSchema.js';
export class User {
  // TODO: bd methods

  async register(input) {
    const newUser = new UserModel(input);
    await newUser.save();
    return newUser;
  }
  async deleteMany() {
    try {
      const result = await UserModel.deleteMany();
      console.log(`Se eliminaron ${result.deletedCount} documentos.`);
      return result;
    } catch (error) {
      console.error('Error al eliminar documentos:', error);
      throw error;
    }
  }

  async insertMany(products) {
    try {
      const result = await UserModel.insertMany(products);
      console.log(`Se insertaron ${result.length} documentos.`);
      return result;
    } catch (error) {
      console.error('Error al insertar documentos:', error);
      throw error;
    }
  }
  async findUser(userId) {
    try {
      const result = await UserModel.findOne(userId);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
