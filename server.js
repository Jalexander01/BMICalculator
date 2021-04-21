const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", function(req, res){
//   console.log(req);
//   res.send("Hello asda");
//
// })

app.get("/", function(req, res){
  // console.log(req);
  // res.sendFile();
  res.sendFile(__dirname + "/index.html");
  // res.send(__dirname);

})

app.post("/", function(req, res){
  var numb1 = Number(req.body.num1);
  var numb2 = Number(req.body.num2);
  results = numb1 + numb2;

  res.send("The results of " + numb1 + " + " + numb2 + " is " + results);
})

app.get("/bmicalculator", function(req, res){
  // console.log(req);
  // res.sendFile();
  res.sendFile(__dirname + "/bmicalculator.html");
  // res.send(__dirname);

})

app.post("/bmicalculator", function(req, res){
  var weight = Number(req.body.Weight);
  var height = Number(req.body.Height);
  results = weight/(height * height);

  res.send("Your BMI is " + weight + " and " + height + " is " + results);
})


app.listen(3000, function(){
  console.log("Server started on port 3000")
});
