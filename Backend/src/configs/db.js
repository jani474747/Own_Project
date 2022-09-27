const mongoose = require("mongoose")
const connect = () =>{
   // console.log(connect)
    return mongoose.connect("mongodb+srv://shaikjani:shaikjani@cluster0.xlbdyeh.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = connect;