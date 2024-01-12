import { Router } from 'express';
import multer from 'multer';
import { LoginController } from '../../controllers/LoginController.js';
import { ProductApiController } from '../../controllers/api/productApiController.js';
const storage = multer.diskStorage({
  destination: './public/assets/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage: storage }).single('image');
const productApiController = new ProductApiController();
const loginController = new LoginController();
export const productsApiRouter = Router();
productsApiRouter.get('/', productApiController.getAll);
productsApiRouter.post('/', upload, productApiController.create);
productsApiRouter.get('/tags', productApiController.getTags);
//productsApiRouter.post('/authenticate', loginController.postJWT);

// not required

productsApiRouter.get('/:id', productApiController.getById);
productsApiRouter.delete('/:id', productApiController.delete);
productsApiRouter.patch('/:id', productApiController.patch);
