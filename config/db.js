// const mongoose = require("mongoose")

// const connectDb = async () => {
//     try {
//         const connect = await mongoose.connect("mongodb+srv://taiwoq210:taiwoq210@cluster0.7qipoxi.mongodb.net/")
//         console.log("mongoDb connected successfully" + connect.connection.host);
//     } catch (error) {
//        console.log(error); 
//     }
// }


// module.exports = connectDb


const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`mongodb+srv://taiwoq210:taiwo@cluster0.7qipoxi.mongodb.net/`);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = connectDB