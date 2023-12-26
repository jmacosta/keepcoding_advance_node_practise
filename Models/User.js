import UserModel from '../Schemas/usersSchema.js';
export class User {
  // to do bd statics methods

  static async register(input) {
    const newUser = new UserModel(input);
    await newUser.save();
    return newUser;
  }
}
