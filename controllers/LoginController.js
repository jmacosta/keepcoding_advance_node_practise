import jwt from 'jsonwebtoken';
import { User } from '../Models/User.js';
export class LoginController {
  index(req, res, next) {
    res.locals.error = '';
    res.locals.email = '';
    res.render('login');
  }
  async post(req, res, next) {
    try {
      const userDB = new User();
      const { email, password } = req.body;
      const user = await userDB.findUser({ email });
      if (!user || !(await userDB.comparePasswords(password, user.password))) {
        res.locals.error = req.__('Invalid credentials');
        res.locals.email = email;
        res.render('login');
        return;
      }
      req.session.userLogged = user._id;
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  }
  logout(req, res, next) {
    req.session.regenerate(err => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/');
    });
  }
  async postJWT(req, res, next) {
    try {
      const userDB = new User();
      const { email, password } = req.body;
      const user = await userDB.findUser({ email });
      if (!user || !(await userDB.comparePasswords(password, user.password))) {
        res.json({ error: 'Invalid credentials' });
        return;
      }
      const tokenJWT = await jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );
      res.json({ jwt: tokenJWT });
    } catch (error) {
      next(error);
    }
  }
}
