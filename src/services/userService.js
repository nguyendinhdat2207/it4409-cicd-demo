import User from '../models/userModel.js';

const userService = {
  async getAllUsers() {
    return await User.find();
  },

  async getUserById(id) {
    const user = await User.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    return user;
  },

  async createUser(data) {
    return await User.create(data);
  },

  async updateUser(id, data) {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    return user;
  },

  async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    return user;
  },
};

export default userService;
