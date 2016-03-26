var needle = require('needle'),
    cheerio = require('cheerio'),
    querystring = require('querystring'),
    http = require('http'),
    iconv = require('iconv-lite');

var args = process.argv.slice(2);
console.log(args[0]);

function jiexi(data) {
    return cheerio.load(data);
}

<<<<<<< HEAD
function getValue(url, key, value, last) {
=======
function getValue(url, key, value) {
>>>>>>> 91068259502f3d60a38a2600cc7de800fbfb3db7
    try{
        needle.get(url, function(error, response) {
            if (!error && response.statusCode == 200) {
                if(value != eval('response.body.' + key)) {
<<<<<<< HEAD
                    if(value < eval('response.body.' + key) && last < eval('response.body.' + key)) {
                        BTC_last_max ++;
                        console.log("last money: " + eval('response.body.' + key) + " +" + BTC_last_max);
                    }else if(value < eval('response.body.' + key) && last > eval('response.body.' + key)) {
                        BTC_last_max = 1;
                        console.log("last money: " + eval('response.body.' + key) + " +" + BTC_last_max)
                    }else if(value > eval('response.body.' + key) && last > eval('response.body.' + key)) {
                        BTC_last_min ++;
                        console.log("last money: " + eval('response.body.' + key) + " -" + BTC_last_min);
                    }else if(value > eval('response.body.' + key) && last < eval('response.body.' + key)) {
                        BTC_last_min = 1;
                        console.log("last money: " + eval('response.body.' + key) + " -" + BTC_last_min)
                    }else{
                        console.log("last money: " + eval('response.body.' + key) + " =")
                    }

                    BTC_last = eval('response.body.' + key);
                }
                getValue(url, key, eval('response.body.' + key), value);
=======
                    console.log(eval('response.body.' + key));
                }
                getValue(url, key, eval('response.body.' + key));
>>>>>>> 91068259502f3d60a38a2600cc7de800fbfb3db7
            }
        });
    }catch(e){
        console.log(e);
    }
}

<<<<<<< HEAD
var BTC_last_max = 0;
var BTC_last_min = 0;

getValue('https://data.btcchina.com/data/ticker?market=btccny', 'ticker.last', 0, 0);
=======
getValue('https://data.btcchina.com/data/ticker?market=btccny', 'ticker.last', 0);
>>>>>>> 91068259502f3d60a38a2600cc7de800fbfb3db7
