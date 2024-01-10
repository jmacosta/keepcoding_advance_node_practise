import { Router } from 'express';
import multer from 'multer';
import { LoginController } from '../controllers/LoginController.js';
import { ProductsController } from '../controllers/productsController.js';
import sessionAuthMiddleware from '../lib/sessionAuthMiddleware.js';
const productsController = new ProductsController();
const loginController = new LoginController();
const storage = multer.diskStorage({
  destination: './public/assets/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage: storage }).single('image');
export const productsRouter = Router();
productsRouter.get('/', sessionAuthMiddleware, productsController.getAll);
productsRouter.get(
  '/list-view',
  sessionAuthMiddleware,
  productsController.listView
);
productsRouter.get(
  '/new-product',
  sessionAuthMiddleware,
  productsController.new
);
productsRouter.post(
  '/new-product',
  sessionAuthMiddleware,
  upload,
  productsController.create
);

productsRouter.get('/logout', loginController.logout);
