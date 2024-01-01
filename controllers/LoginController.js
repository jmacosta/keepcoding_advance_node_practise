import { User } from '../Models/User.js';
export class LoginController {
  index(req, res, next) {
    res.locals.title = 'Nodepop';
    res.locals.error = '';
    res.local.email = '';
    res.render('login');
  }
  async post(req, res, next) {
    try {
      const userDB = new User();
      const { email, password } = req.body;
      const user = await userDB.findUser({ email });
      if (!user || user.password !== password) {
        //TODO: refactor to use i18n
        //res.locals.error = req.__('Invalid credentials');
        res.locals.title = 'Nodepop';
        res.locals.error = 'Invalid credentials';
        res.locals.email = email;

        res.render('login');
        return;
      }
      res.redirect('/products');
    } catch (error) {
      next(error);
    }
  }
}
