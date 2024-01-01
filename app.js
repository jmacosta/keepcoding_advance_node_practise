import cookieParser from 'cookie-parser';
import express, { json } from 'express';
import logger from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/connectMongoose.js';
import { productsApiRouter } from './routes/api/products_api.js';
import { loginRouter } from './routes/login.js';
import { productsRouter } from './routes/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.static('public'));
app.use(json());
await connectDB();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.json({ message: 'Wellcome to Nodepop' });
});
// middlewares
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/products', productsRouter);
app.use('/api/', productsApiRouter);
app.use('/login', loginRouter);
app.use((req, res, next) => {
  res.status(404).json({ error: 'path not found' });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
