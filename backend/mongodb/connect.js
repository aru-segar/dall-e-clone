import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true); // This is to prevent Mongoose from throwing a warning when using findOneAndUpdate

    mongoose.connect(url) // Connect to MongoDB
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err)); // Log a message if the connection is successful or not
}

export default connectDB;