import { Router } from 'express';
import { productApiController } from '../../controllers/api/products.js';
export const productsApiRouter = Router();
productsApiRouter.get('/', productApiController.getAll);
productsApiRouter.post('/', productApiController.create);
productsApiRouter.get('/tags', productApiController.getTags);

// not required

productsApiRouter.get('/:id', productApiController.getById);
productsApiRouter.delete('/:id', productApiController.delete);
productsApiRouter.patch('/:id', productApiController.patch);
