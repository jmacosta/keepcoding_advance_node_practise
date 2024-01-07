import { Product } from '../Models/Product.js';
export class ProductsController {
  async getAll(req, res) {
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
    res.locals.products = products;
    //res.json(products);

    res.render('index');
  }

  async create(req, res, next) {
    const product = new Product();
    const { name, sellOrSearch, description, price, image, tags } = req.body;
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
      const newProduct = await product.create(productData);
      return res.redirect('/');
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }

  new(req, res, next) {
    res.render('product-new');
  }
}
