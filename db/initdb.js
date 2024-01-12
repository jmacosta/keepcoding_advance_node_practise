import dotenv from 'dotenv';
import { createInterface } from 'node:readline';
import { Product } from '../Models/Product.js';
import { User } from '../Models/User.js';
import { readJson } from '../utils.js';
import { connectDB, disconnectDB } from './connectMongoose.js';
dotenv.config();
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
  await initUsers(usersData);
  await initProducts();
  await disconnectDB();
}
main().catch(err => console.log('Hubo un error', err));

async function initProducts() {
  // delete documents at DB
  await product.deleteMany();
  // create elements at DB
  await product.insertMany(productsData.products);
}
async function changePassword(element) {
  element.password = await user.hashPassword(element.password);
  return element;
}

async function usersChangePassword(users) {
  let result = [];
  await Promise.all(
    users.map(async user => {
      result.push(await changePassword(user));
    })
  );

  return result;
}

async function initUsers() {
  // delete users at DB
  await user.deleteMany(usersData);
  // create users at DB
  const usersModifieds = await usersChangePassword(usersData.users);
  await user.insertMany(usersModifieds);
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
