import { Router } from 'express';
import { LoginController } from '../../controllers/LoginController.js';
import { ProductApiController } from '../../controllers/api/productApiController.js';
const productApiController = new ProductApiController();
const loginController = new LoginController();
export const productsApiRouter = Router();
productsApiRouter.get('/', productApiController.getAll);
productsApiRouter.post('/', productApiController.create);
productsApiRouter.get('/tags', productApiController.getTags);
productsApiRouter.post('/authenticate', loginController.post);

// not required

productsApiRouter.get('/:id', productApiController.getById);
productsApiRouter.delete('/:id', productApiController.delete);
productsApiRouter.patch('/:id', productApiController.patch);
