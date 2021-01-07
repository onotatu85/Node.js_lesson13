//MongoDBモジュールをロード
const MongoDB = require("mongodb").MongoClient,

dbURL = "mongodb://localhost:27017",

dbName = "recipe_db";

//ローカルデータベースサーバーへの接続を設定
MongoDB.connect(dbURL,(error,client) => {
  if(error) throw error;

  //MongoDBサーバーへの接続から、recipe_db データベースを取得
  let db = client.db(dbName);

  //contactsコレクションから全レコードを取り出す
  db.collection("contacts")
  .find()
  .toArray((error,data) => {
    if(error) throw error;
    console.log(data);//結果をコンソールにログを出力
  });
  db.collection("contacts")
  .insert({name:"Freeddie Mercury",email:"fred@queen.com"
  },(error,db) => {
  if(error)throw error;console.log(db);
  });
});

