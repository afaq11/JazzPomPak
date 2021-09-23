var express = require('express');
var app = express();
var bodyParser = require('body-parser')
require('dotenv').config();
const connect = require("./models/db");
const pompak = require("./models/PomPak");
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connection
connect();


app.post('/pompak',(req, res) => {

    try{ 

            var title = req.body.title;
            var description = req.body.description;
            var Youtube_video_link =req.body.Youtube_video_link; 
            var IOS_Appstore_link=req.body.IOS_Appstore_link;
            var Android_Playstore_link=req.body.Android_Playstore_link;    
            console.log("title = "+title+", description is "+description);
            pompak.findOne({}, [], function(err, post) {
                if(post===null){
                    const newPompak = new pompak({title:title,description:description,Youtube_video_link:Youtube_video_link,IOS_Appstore_link:IOS_Appstore_link,Android_Playstore_link:Android_Playstore_link})
                    const Insert = newPompak.save();
                    console.log("inserted");
                    res.send(Insert);

                }else{
                pompak.findByIdAndUpdate(post.id,{title:title,description:description,Youtube_video_link:Youtube_video_link,IOS_Appstore_link:IOS_Appstore_link,Android_Playstore_link:Android_Playstore_link}).then(user=>{
                    console.log(user);
                    res.send("updated");
                }).catch(err=>{
                         console.log(err.message);
                     });
        
                }
              });
              
    }catch(err){
            console.log("error 1")
            console.log(err.message)
        }
  });

  app.get('/pompak', function (req, res) {

    pompak.findOne({}, [], function(err, post) {
        console.log(post);
        res.send(post);
      });
     });


    // app.put('/pompak1',(req, res) => {
        //     var title = req.body.title;
        //     var description = req.body.description;
        //     var Youtube_video_link =req.body.Youtube_video_link; 
        //     var IOS_Appstore_link=req.body.IOS_Appstore_link;
        //     var Android_Playstore_link=req.body.Android_Playstore_link;   
            
        //     pompak.findByIdAndUpdate('60c08ea1b01d2336005fbad3',{title:title,description:description,Youtube_video_link:Youtube_video_link,IOS_Appstore_link:IOS_Appstore_link,Android_Playstore_link:Android_Playstore_link}).then(user=>{
        //     console.log(user);
        //     res.send("updated");
        // }).catch(err=>{
        //          console.log(err.message);
        //      });
          
        // });
app.get('/hello', function (req, res) {

    pompak.findOne({}, [], function(err, post) {
        console.log( post.id);
        res.send(post);
        // if(post===null){
        //     console.log( "please insert" );
        // }
      });
    // var  useremail;
    // useremail =  pompak.findOne();
      
    // console.log(useremail);

});
app.get('/', (req, res) => {
    // Use req.log (a `pino` instance) to log JSON:
 
    req.log.info({ message: 'Hello from Appsody!' });
    res.send('Hello congrats!');
  });
app.post('/login',(req, res) => {
    var user_name = req.body.name;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.send(req.body);
  });
var server = app.listen(PORT, function () {
    console.log(`Node server is running on ${PORT}..`);
}); 