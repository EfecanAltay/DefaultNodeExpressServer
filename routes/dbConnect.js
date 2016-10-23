/*
  auther:Efecan Altay
  date : 10.10.2016

  name : Basic_MongoDB_Connection_Module (filename:dbConnect.js)

  platform:npm
  version: javascript last version
*/

//Database Modulu

var databaseLocate = "mongodb://localhost:27017/deneme";

// mongodb bağlantısı gerçekleştirmek için kulladığımız kütüphaneler.
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;


// database bağlantısı için gerekli nesnemiz
var ConnectDB ={
  connect:function(callback){
    mongoClient.connect(databaseLocate, function(err, db) {
      if(!err) {
        if(typeof callback === "function")
        {
          callback(db); // callback fonksiyon olarak db parametreli kullanılır(örn. function(db){...yapılacak işlemler[örn:var c=db.collection]...})
        }
      }
    db.close();
    });
  },
  setLocate:function(locateUrlString){
    databaseLocate = locateUrlString;
  }
};

module.exports = ConnectDB;
