const mongoose = require('mongoose');

// define schema  
const PomPakSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  youtube_video_link: { type: String},
  ios_Appstore_link: { type: String},
  android_Playstore_link: { type: String}
  
  },{timestamps:true});
  // Create Model 
  const PomPak = mongoose.model("PomPak",PomPakSchema);
  module.exports = PomPak;