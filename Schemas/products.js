import mongose from 'mongoose';
import { v4 as uuidv4 } from 'mongoose-uuid';

export const productSchema = mongose.Schema(
  {
    id: { type: String, unique: true, default: uuidv4 },
    name: { type: String, index: true },
    sellOrSearch: { type: String, index: true },
    price: { type: String },
    image: { type: String },
    tags: [{ type: String }]
  },
  { collection: 'products' }
);

// to do validate functions
