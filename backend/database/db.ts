import mongoose = require('mongoose');
import { MONGO_URL } from '../utils/config';

export const connectDb = async () => {
  if (!MONGO_URL) {
    console.log('MONGO_URL must be defined'.red.underline.bold);
    process.exit();
  }

  try {
    await mongoose.connect(MONGO_URL, {});
    console.log('Database connection established...'.blue.bold);
  } catch (error) {
    console.log('Database connection error: ' + error.message);
    process.exit(1);
  }
};
