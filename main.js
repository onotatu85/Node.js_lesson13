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




//モデルを作成して保存する2つの方法
//1つ目
//新しいSubscriberを実体化する
var Subscriber1 = new Subscriber({
  name:"Jon Wexler",
  email:"jon@jonwexler.com"
});

//Subscriberをデータベースに保存する
Subscriber1.save((error,savedDocument) => {
  //エラーがあれば次のミドルウェア関数に渡す
  if (error) console.log(error);
  //保存したドキュメントをログに出す
  console.log(savedDocument);
});

//2つ目
Subscriber.create({
  name:"Jon Wexler",
  email:"jon@jonwexler.com"
},
//Subscriberの作成と保存を一度に行う
function (error,savedDocument){
if(error) console.log(error);
console.log(savedDocument);
}
);