
var mongoose=require('mongoose');
mongoose.promise=global.Promise;
var MONGODB_URI='mongodb://aitivinayak:vinayak!@ds127105.mlab.com:27105/test1';
mongoose.connect(MONGODB_URI||'mongodb://localhost:27017/data');
module.exports={ mongoose};