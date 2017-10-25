
var mongoose=require('mongoose');
mongoose.promise=global.Promise;
var MONGODB_URI;
mongoose.connect(MONGODB_URI||'mongodb://localhost:27017/data');
module.exports={ mongoose};