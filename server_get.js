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

function getValue(url, key, value) {
    try{
        needle.get(url, function(error, response) {
            if (!error && response.statusCode == 200) {
                if(value != eval('response.body.' + key)) {
                    console.log(eval('response.body.' + key));
                }
                getValue(url, key, eval('response.body.' + key));
            }
        });
    }catch(e){
        console.log(e);
    }
}

getValue('https://data.btcchina.com/data/ticker?market=btccny', 'ticker.last', 0);
