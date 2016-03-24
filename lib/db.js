var mongoose = require('mongoose');
var schema   = mongoose.Schema,
    id       = schema.ObjectId;
mongoose.set('debug', true);

var db = mongoose.connect('mongodb://localhost/btc');
// var db = mongoose.connect('mongodb://mongodb-ccalaop1.myalauda.cn:10948/ireoo');

var ticker = new schema({
  buy        : {type : Number, default: 0},
  date       : {type : Number, default: 0},
  high       : {type : Number, default: 0},
  last       : {type : Number, default: 0},
  low        : {type : Number, default: 0},
  market     : {type : String, default: ''},
  open       : {type : Number, default: 0},
  prev_close : {type : Number, default: 0},
  sell       : {type : Number, default: 0},
  vol        : {type : Number, default: 0},
  vwap       : {type : Number, default: 0}
}, { versionKey: false });
db.model('ticker', ticker);

var trade = new schema({
  amount   : {type : Number, default: 0},
  date     : {type : Number, default: 0},
  market   : {type : String, default: ''},
  price    : {type : Number, default: 0},
  trade_id : {type : Number, default: 0, unique: true},
  type     : {type : String, default: ''}
}, { versionKey: false });
db.model('trade', trade);

var grouporder = new schema({
  "market" : {type : String, default: ''},
  "ask"    : [{
    "price"       : {type : Number, default: 0},
    "type"        : {type : String, default: ''},
    "totalamount" : {type : Number, default: 0},
  }],
  "bid"    : [{
    "price"       : {type : Number, default: 0},
    "type"        : {type : String, default: ''},
    "totalamount" : {type : Number, default: 0},
  }]
}, { versionKey: false });
db.model('grouporder', grouporder);

exports.ticker     = db.model('ticker');
exports.trade      = db.model('trade');
exports.grouporder = db.model('grouporder');
