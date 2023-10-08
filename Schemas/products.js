import mongoose from 'mongoose';
import mongooseUUID from 'mongoose-uuid';
import { boolean, number } from 'zod';
const { v4: uuidv4 } = mongooseUUID;

const productSchema = mongoose.Schema(
  {
    //id: { type: String, unique: true, default: uuidv4 },
    name: { type: String, index: true },
    sellOrSearch: { type: Boolean },
    price: { type: Number },
    image: { type: String },
    tags: [{ type: String }]
  },
  { collection: 'products' }
);

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;

// to do validate functions
