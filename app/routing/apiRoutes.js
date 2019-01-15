var friendsData=require("../data/friends");
module.exports=function(app){
    //client get data
    app.get("/api/friends",function(req,res){
        res.json(friendsData);
    });
    //post request data to server
    app.post("/api/friends",function(req,res){
        console.log("req.body",req.body);
        friendsData.push(req.body);
    });
}