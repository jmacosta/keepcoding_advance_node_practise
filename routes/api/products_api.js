import { Router } from 'express';
import { ProductApiController } from '../../controllers/api/productApiController.js';
const productApiController = new ProductApiController();
export const productsApiRouter = Router();
productsApiRouter.get('/', productApiController.getAll);
productsApiRouter.post('/', productApiController.create);
productsApiRouter.get('/tags', productApiController.getTags);

// not required

productsApiRouter.get('/:id', productApiController.getById);
productsApiRouter.delete('/:id', productApiController.delete);
productsApiRouter.patch('/:id', productApiController.patch);
