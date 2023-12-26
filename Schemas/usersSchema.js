import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    email: { type: String, index: true },
    password: { type: String }
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
