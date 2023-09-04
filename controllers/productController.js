const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.send("create product");
};
const getAllProduct = async (req, res) => {
  res.send("get all product");
};
// const getSingleProduct = async (req, res)=>{
//     res.send('get single product')
// }
// const updateProduct = async (req, res)=>{
//     res.send('update product')
// }

// const deleteProduct = async (req, res)=>{
//     res.send('delete product')
// }


 module.exports = {createProduct, getAllProduct}