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

function getValue(url, key, value, last) {
    try{
        needle.get(url, function(error, response) {
            if (!error && response.statusCode == 200) {
                if(value != eval('response.body.' + key)) {
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
            }
        });
    }catch(e){
        console.log(e);
    }
}

var BTC_last_max = 0;
var BTC_last_min = 0;

getValue('https://data.btcchina.com/data/ticker?market=btccny', 'ticker.last', 0, 0);
