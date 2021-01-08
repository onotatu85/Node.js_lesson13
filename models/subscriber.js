//mongooseをロード
const mongoose = require("mongoose");

//mongoose.Schemaで新しいスキーマを作る
const subscriberSchema = mongoose.Schema({
  name:String,
  email:String,
  zipCode:Number
});

//Subscriberモデルだけをエクスポートする
 module.exports = mongoose.model("Subscriber",subscriberSchema)