import { User } from '../../Models/User.js';
export class UsersApiController {
  async register(req, res) {
    const userData = req.body;

    try {
      const newUser = await User.register(userData);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }

  async getByEmail(req, res) {
    const email = req.body.id; //TODO: check rescue information
    try {
      const user = await User.getByEmail(email);
      if (user) return res.json(user);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Not found' });
    }
  }
  // TODO: other methodos not required
  async delete(req, res) {}
  async patch(req, res) {}
}
