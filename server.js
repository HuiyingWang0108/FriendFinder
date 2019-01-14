var express=require("express");
var path=require("path");
var app=express();
//
var port=process.env.PORT||8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./public/home.html"));
});
app.listen(port,function(){
    console.log("App listening on PORT: " + port);

});

