import express, { json } from 'express';
const app = express();
app.use(json());
app.get('/', (req, res) => {
  res.json({ message: 'Wellcome to Nodepop' });
});
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
