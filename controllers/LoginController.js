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
        //TODO: refactor to use i18n
        //res.locals.error = req.__('Invalid credentials');

        res.locals.error = 'Invalid credentials';
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
}
