//mongooseをロード
const mongoose = require("mongoose");

const Subscriber = require("./models/subscriber");

//データベース接続を設定
mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  {useNewUrlParser:true}
);

//データベースをdb変数に代入
const db = mongoose.connection;

//データベース接続時のメッセージをログに出力する
db.once("open",() => {
  //mongooseを使ってMongoDBに接続できました！
  console.log("Successfully connected to MongoDB using Mongoose!");
});


//クエリの作成と実行
var myQuery = Subscriber.findOne({
  name:"Jon Wexler"
})
.where("email",/wexler/);

//クエリを実行し、コールバック関数でエラーとデータを処理する
myQuery.exec((error,data) => {
  if(data) console.log(data.name);
});

