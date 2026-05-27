import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB Atlas');
};

export default connectDB;
