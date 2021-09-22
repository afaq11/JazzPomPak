


const mongoose = require('mongoose');
// connect mongodb
const  connect= async ()=>{
   try{
   await mongoose.connect(process.env.DB,{useNewUrlParser: true, useUnifiedTopology: true })
    console.log("connected");
   }
   catch(err){
       console.log(err.message);
   }


}
module.exports = connect;
