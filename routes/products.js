import { Router } from 'express';
import { ProductsController } from '../controllers/productsController.js';
import sessionAuthMiddleware from '../lib/sessionAuthMiddleware.js';
const productsController = new ProductsController();
export const productsRouter = Router();
productsRouter.get('/', sessionAuthMiddleware, productsController.getAll);
