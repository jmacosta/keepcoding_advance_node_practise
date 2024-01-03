import { Router } from 'express';
export const changeLocaleRouter = Router();
changeLocaleRouter.get('/:locale', (req, res, next) => {
  const locale = req.params.locale;
  res.cookie('nodeapp-locale', locale, {
    maxAge: 1000 * 60 * 60 * 24 * 30 //30 days
  });
  res.redirect(req.get('referer'));
});
