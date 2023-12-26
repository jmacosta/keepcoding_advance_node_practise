import { Router } from 'express';
import { productsController } from '../controllers/productsController.js';
export const productsRouter = Router();
productsRouter.get('/', productsController.getAll);
