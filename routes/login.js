import { Router } from 'express';
import { LoginController } from '../controllers/LoginController.js';
const loginController = new LoginController();
export const loginRouter = Router();
loginRouter.get('/', loginController.index);
loginRouter.post('/', loginController.post);
loginRouter.post('/api/authenticate', loginController.post);
