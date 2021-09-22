import mongoose from 'mongoose';
class pomPakDetails {
    initSchema() {
      const schema = new mongoose.Schema({
        // id: {
        //   type: Number,
        //   required: true,
        // },
        title: {
          type: String,
        //  required: true
        },
        description: {
          type: String,
        //  required: true
        },
        youtube_video_link:{
          type: String,
         // required:true
        },
        ios_Appstore_link: {
          type: String,
        //  required: true
        },
        android_Playstore_link: {
          type: String,
         // required: true
        },
   
      });
      mongoose.model("pomPakDetails", schema);
    }
  
    getInstance() {
      this.initSchema();
      return mongoose.model("pomPakDetails");
    }
  }
  
  export default pomPakDetails;