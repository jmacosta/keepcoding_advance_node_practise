import { Router } from 'express';
import { LoginController } from '../controllers/LoginController.js';
import { ProductsController } from '../controllers/productsController.js';
import sessionAuthMiddleware from '../lib/sessionAuthMiddleware.js';
const productsController = new ProductsController();
const loginController = new LoginController();
export const productsRouter = Router();
productsRouter.get('/', sessionAuthMiddleware, productsController.getAll);
productsRouter.get(
  '/new-product',
  sessionAuthMiddleware,
  productsController.new
);
productsRouter.post(
  '/new-product',
  sessionAuthMiddleware,
  productsController.post
);

productsRouter.get('/logout', loginController.logout);
