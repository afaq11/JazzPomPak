import mongoose from 'mongoose';
class dbClass {
    async initSchema() {
        try{
            await mongoose.connect(process.env.DB,{useNewUrlParser: true, useUnifiedTopology: true })
             console.log("connected");
            }
            catch(err){
                console.log(err.message);
            }
    }
  

  }
  
  export default dbClass;