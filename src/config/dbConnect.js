import mongoose from "mongoose";

mongoose.connect('mongodb://citizix:S3cret@localhost:27017/alura-node?authSource=admin');

let db = mongoose.connection;

export default db;