
var mongoose=require('mongoose');
mongoose.promise=global.Promise;
MONGODB_URI='mongodb://<dbuser>:<dbpassword>@ds127105.mlab.com:27105/test1'
mongoose.connect(MONGODB_URI);
module.exports={ mongoose};