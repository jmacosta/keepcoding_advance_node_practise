import mongoose from 'mongoose';
import mongooseUUID from 'mongoose-uuid';
const { v4: uuidv4 } = mongooseUUID;

const productSchema = mongoose.Schema(
  {
    //id: { type: String, unique: true, default: uuidv4 },
    name: { type: String, index: true },
    sellOrSearch: { type: String, index: true },
    price: { type: String },
    image: { type: String },
    tags: [{ type: String }]
  },
  { collection: 'products' }
);

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;

// to do validate functions
