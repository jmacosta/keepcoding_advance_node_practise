import express, { json } from 'express';
import { connectDB } from './db/connectMongoose.js';
import { productsRouter } from './routes/products.js';
const app = express();
app.use(json());
await connectDB();
app.get('/', (req, res) => {
  res.json({ message: 'Wellcome to Nodepop' });
});

app.use('/products', productsRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
