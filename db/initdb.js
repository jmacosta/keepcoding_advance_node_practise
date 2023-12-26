import { createInterface } from 'node:readline';
import { Product } from '../Models/Product.js';
import { User } from '../Models/User.js';
import { readJson } from '../utils.js';
import { connectDB, disconnectDB } from './connectMongoose.js';
const product = new Product();
const user = new User();

const productsData = readJson('./db/products.json');
const usersData = readJson('./db/users.json');

async function main() {
  await connectDB();
  //await new Promise(resolve => mongoose.connection.once('open', resolve));

  const remove = await ask(
    'Estas seguro de que quieres borrar la base de datos y cargar datos iniciales? s/n '
  );
  if (!remove) {
    process.exit();
  }
  await initProducts();
  await initUsers();
  await disconnectDB();
}
main().catch(err => console.log('Hubo un error', err));

async function initProducts() {
  // delete documents at DB
  await product.deleteMany();
  // create elements at DB
  await product.insertMany(productsData.products);
}
async function initUsers() {
  // delete users at DB
  await user.deleteMany();
  // create users at DB
  await user.insertMany(usersData.users);
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
