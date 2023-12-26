import { Router } from 'express';
import { ProductsController } from '../controllers/productsController.js';
const productsController = new ProductsController();
export const productsRouter = Router();
productsRouter.get('/', productsController.getAll);
