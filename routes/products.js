import { Router } from 'express';
import { productController } from '../controllers/products.js';
export const productsRouter = Router();
productsRouter.get('/', productController.getAll);

// not required
