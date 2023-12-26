import mongoose from 'mongoose';
import mongooseUUID from 'mongoose-uuid';
const { v4: uuidv4 } = mongooseUUID;

const userSchema = mongoose.Schema(
  {
    id: { type: String, unique: true, default: uuidv4 },
    email: { type: String, index: true },
    password: { type: String }
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
