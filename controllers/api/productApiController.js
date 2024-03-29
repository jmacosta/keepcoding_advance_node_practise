import cote from 'cote';
import dotenv from 'dotenv';
import { Product } from '../../Models/Product.js';
dotenv.config();
const { Requester } = cote;
export class ProductApiController {
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

    try {
      const thumbsPath = process.env.THUMBS_PATH;
      const assetsPath = process.env.ASSETS_PATH;
      const products = await product.getAll({ filter, sort, limit, skip });
      const productsWithThumbs = products.map(product => ({
        _id: product._id,
        name: product.name,
        sellOrSearch: product.sellOrSearch,
        description: product.description,
        price: product.price,
        image: assetsPath + product.image,
        tags: product.tags,
        owner: product.owner,
        thumb: thumbsPath + 'thumbnail-' + product.image
      }));
      res.json(productsWithThumbs);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }

  async create(req, res) {
    const { name, sellOrSearch, description, price, tags } = req.body;
    const owner = req.userLoggedAPI;
    const product = new Product();
    const requester = new Requester({ name: 'Image for Thumb' });
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
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ error: JSON.parse(error) });
    }
  }
  async getTags(req, res) {
    const product = new Product();
    return res.json(await product.getTags());
  }
  async delete(req, res) {}
  async patch(req, res) {}
  async getById(req, res) {
    const product = new Product();
    const id = req.params.id;
    console.log(`el id es ${id}`);
    try {
      const productElement = await product.getById(id);
      if (productElement) return res.json(productElement);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Item Not found' });
    }
  }
}
