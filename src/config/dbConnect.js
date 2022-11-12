import mongoose from "mongoose";

mongoose.connect("mongodb+srv://juan:mongodb@livraria.swxfdyn.mongodb.net/livraria_nodeJS");

const db = mongoose.connection;

export default db;