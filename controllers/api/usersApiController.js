import { User } from '../../Models/User.js';
export class usersApiController {
  static async register(req, res) {
    const userData = req.body;

    try {
      const newUser = await User.register(userData);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }

  static async getByEmail(req, res) {
    const email = req.body.id; // todo check rescue information
    try {
      const user = await User.getByEmail(email);
      if (user) return res.json(user);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Not found' });
    }
  }
  // todo other methodos not required
  static async delete(req, res) {}
  static async patch(req, res) {}
}
