const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const port = process.env.PORT || 5000;

// parsor
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connect DB
connectDB();

// routes 
app.use('/auth/login', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

app.get('/', (req, res) => res.send('ok'));

app.listen(port, () => console.log(`server running port: ${port}`));  
