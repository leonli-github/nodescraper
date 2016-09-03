var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('h.log', {flags : 'w'});



var url = 'http://www.aastocks.com/en/ltp/rtquote.aspx?symbol=00911';

request(url, function(err, resp, body) {
        if (err)
            throw err;
        $ = cheerio.load(body);
        log_file.write($('body'));
        // TODO: scraping goes here!
    });