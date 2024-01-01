export default (req, res, next) => {
  if (!req.session.userLogged) {
    res.redirect('/login');
    return;
  }
  next();
};
