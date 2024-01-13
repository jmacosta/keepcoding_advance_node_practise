import cote from 'cote';
import dotenv from 'dotenv';
import { Product } from '../Models/Product.js';
const { Requester } = cote;
dotenv.config();
export class ProductsController {
  static async createQuery(req) {
    const filterByName = req.query.name;
    const filterByTag = req.query.tags;
    const filterBySellOrSearch = req.query.sellOrSearch;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const skip = req.query.start;
    const product = new Product();
    const filter = {};
    if (filterByName) {
      filter.name = new RegExp('^' + req.query.name, 'i');
    }
    if (filterByTag) {
      filter.tags = { $in: filterByTag };
    }
    if (filterBySellOrSearch) {
      filter.sellOrSearch = filterBySellOrSearch;
    }
    const products = await product.getAll({ filter, sort, limit, skip });
    return products;
  }
  async getAll(req, res) {
    res.locals.products = await ProductsController.createQuery(req);
    if (process.env.ASSETS_PATH.startsWith('public')) {
      res.locals.imagePath = process.env.ASSETS_PATH.substring('public'.length);
    }

    res.render('index');
  }
  async listView(req, res) {
    res.locals.products = await ProductsController.createQuery(req);
    res.render('listView');
  }

  async create(req, res, next) {
    const product = new Product();
    const requester = new Requester({ name: 'Image for Thumb' });

    const { name, sellOrSearch, description, price, tags } = req.body;
    let image = '';
    if (req.file) {
      image = req.file.filename;
      const event = {
        type: 'create-thumbnail',
        origin: req.file.destination,
        image: image
      };
      requester.send(event, result => {
        console.log(Date.now(), 'Message from Service ', result);
      });
    }

    const owner = req.session.userLogged;
    const productData = {
      name,
      sellOrSearch,
      description,
      price,
      image,
      tags,
      owner
    };

    try {
      await product.create(productData);
      return res.redirect('/');
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }

  new(req, res, next) {
    res.render('product-new');
  }
}
