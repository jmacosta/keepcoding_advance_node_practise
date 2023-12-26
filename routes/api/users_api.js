import { Router } from 'express';
import { usersApiController } from '../../controllers/api/usersApiController.js';
export const usersApiRouter = Router();
usersApiRouter.get('/', usersApiController.getByEmail); // todo check how to apply
usersApiRouter.post('/', usersApiController.register);
usersApiRouter.post('/authenticate', usersApiController.register);

// not required

usersApiRouter.get('/:id', productApiController.getById);
usersApiRouter.delete('/:id', productApiController.delete);
usersApiRouter.patch('/:id', productApiController.patch);
