import express, { json } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/connectMongoose.js';
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

app.use('/products', productsRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
