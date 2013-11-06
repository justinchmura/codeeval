(function () {
  var fs = require('fs'), parse = parseInt;
  fs.readFile(process.argv[2], function (err, data) {
    var lines = data.toString().replace('\r', '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var n = parse(lines[i], 10), digits = n.toString().split(''), sum = 0;
      for (var j = 0; j < digits.length; j++) {
        sum += Math.pow(parse(digits[j], 10), digits.length);
      }
      console.log(sum === n ? 'True' : 'False');
    }
    process.exit(0);
  });
} ());