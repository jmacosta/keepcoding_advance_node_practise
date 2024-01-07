import createError from 'http-errors';
import jwt from 'jsonwebtoken';
export default async (req, res, next) => {
  try {
    const jwtToken = req.get('Authorization') || req.body.jwt || req.query.jwt;
    if (!jwtToken) {
      next(createError(401, 'no token provided'));
      return;
    }
    jwt.verify(jwtToken, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        next(createError(401, 'Unauthorized'));
        return;
      }
      req.userLoggedAPI = payload;
      next();
    });
  } catch (error) {
    next(error);
  }
};
