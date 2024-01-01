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
    res.locals.title = 'Nodepop';

    const products = await product.getAll({ filter, sort, limit, skip });
    res.locals.products = products;
    //res.json(products);

    res.render('index');
  }

  async create(req, res) {
    const productData = req.body;

    try {
      const newProduct = await product.create(productData);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }
}
