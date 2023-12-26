import mongoose from 'mongoose';
import mongooseUUID from 'mongoose-uuid';
const { v4: uuidv4 } = mongooseUUID;

const productSchema = mongoose.Schema(
  {
    //id: { type: String, unique: true, default: uuidv4 },
    name: { type: String, index: true },
    sellOrSearch: { type: Boolean, index: true },
    price: { type: Number, index: true },
    image: { type: String },
    tags: { type: [String], index: true },
    owner: { type: String, index: true }
  },
  { collection: 'products' }
);

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;

// to do validate functions
