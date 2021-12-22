
const mongoose = require('mongoose');//اول شى نصددر المنقوز
const dbURI='mongodb://localhost:27017/TodoList';//اسم قاعدة البيانات في البوست مان 



mongoose.connect(dbURI);
 
const db =mongoose.connection;//اذا كان متصل 


db.on("error",(err)=>{
    console.log( "ERROR in mongodb ")
});

db.on("connected",(err)=>{
    console.log("mongodb is connected..")
});

/*
var MongoClient = require('mongodb').MongoClient;
var dburl    =   "mongodb://localhost:27017/TodoList";
MongoClient.connect(dburl, function(err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});*/