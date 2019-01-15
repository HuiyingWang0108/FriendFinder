var express=require("express");
// var path=require("path");
var app=express();
//
var port=process.env.PORT||8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//a "map" of how to respond when users visit or request data from various URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start server
app.listen(port,function(){
    console.log("App listening on PORT: " + port);

});

