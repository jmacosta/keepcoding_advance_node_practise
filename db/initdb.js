import { createInterface } from 'node:readline';
import { Product } from '../Models/Product.js';
import { readJson } from '../utils.js';
import { connectDB, disconnectDB } from './connectMongoose.js';

const productsData = readJson('./db/products.json');
// const productsWithId = products.map(product => {
//   return { id: randomUUID(), ...product };
// });

async function main() {
  await connectDB();
  //await new Promise(resolve => mongoose.connection.once('open', resolve));

  const borrar = await ask(
    'Estas seguro de que quieres borrar la base de datos y cargar datos iniciales? s/n '
  );
  if (!borrar) {
    process.exit();
  }
  await initProducts();
  await disconnectDB();
}
main().catch(err => console.log('Hubo un error', err));

async function initProducts() {
  // delete documents at DB
  await Product.deleteMany();
  // create elements at DB
  await Product.insertMany(productsData.products);
}
function ask(text) {
  return new Promise((resolve, reject) => {
    const ifc = createInterface({
      input: process.stdin,
      output: process.stdout
    });
    ifc.question(text, answer => {
      ifc.close();
      resolve(answer.toLowerCase() === 's');
    });
  });
}
