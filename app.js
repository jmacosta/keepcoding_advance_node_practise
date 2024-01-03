import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express, { json } from 'express';
import session from 'express-session';
import logger from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/connectMongoose.js';
import i18n from './lib/i18nConfigure.js';
import { productsApiRouter } from './routes/api/products_api.js';
import { changeLocaleRouter } from './routes/change-locale.js';
import { loginRouter } from './routes/login.js';
import { productsRouter } from './routes/products.js';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.static('public'));
app.use(json());
await connectDB();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//   res.json({ message: 'Wellcome to Nodepop' });
// });
// middlewares
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(i18n.init);
app.use(
  session({
    name: 'nodeapp-session',
    secret: 'ñvhskñfhewrrwsrwrwerwerñfbsdfg',
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2 //2d session expired for inactivity
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    })
  })
);
app.use((req, res, next) => {
  res.locals.title = 'Nodepop';
  next();
});
app.use('/', productsRouter);
app.use('/api/', productsApiRouter);
app.use('/login', loginRouter);
app.use('/change-locale', changeLocaleRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: 'path not found' });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
