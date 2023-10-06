import express, { json } from 'express';
import { productsRouter } from './routes/products.js';
const app = express();
app.use(json());
app.get('/', (req, res) => {
  res.json({ message: 'Wellcome to Nodepop' });
});

app.use('/products', productsRouter);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
