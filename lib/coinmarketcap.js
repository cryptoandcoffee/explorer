var request = require('request')
  , settings = require('./settings')
;

var base_url = 'https://api.coinmarketcap.com/v1';


function get_ticker(coin, cb) {
  var req_url = base_url + '/ticker/' + settings.coin;
  request({ uri: req_url, json: true }, function (error, response, body) {
    if (body.length < 1) {
      return cb('Pair not found ' + coin + '-' + exchange, null)
    } else {
      return cb (null, body[0]);
    }
  })
}

module.exports = {
  get_data: function(coin, cb) {
    get_ticker(coin, function(err, body) {
      return cb(err, body);
    });
  }
};
