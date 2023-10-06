import { Router } from 'express';
import { productController } from '../controllers/products.js';
export const productsRouter = Router();
productsRouter.get('/', productController.getAll);
productsRouter.post('/', productController.create);

// to do

productsRouter.get('/:id', productController.getById);
productsRouter.delete('/:id', productController.delete);
productsRouter.patch('/:id', productController.patch);
