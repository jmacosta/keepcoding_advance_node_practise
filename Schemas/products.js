import mongose from 'mongoose';
export const productSchema = mongose.Schema(
  {
    name: { type: String, index: true },
    sellOrSearch: { type: String, index: true },
    price: { type: String },
    image: { type: String },
    tags: [{ type: String, index: true }]
  },
  { collection: 'products' }
);

// to do validate functions
