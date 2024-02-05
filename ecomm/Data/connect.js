import mongoose from "mongoose";
const connect=async()=>{
  const uri=process.env.DATA_BASE_URL
try {
  await mongoose.connect("mongodb+srv://aliyansiddiqui555:mkk0q5LSCmkwvtrD@cluster0.dcxv0oj.mongodb.net/ecommerce?retryWrites=true&w=majority")
  return console.log('connection seccses')
} catch (error) {
  console.log(error)
}
}
export default connect