(function () {
  var fs = require('fs'), parse = parseInt;
  fs.readFile(process.argv[2], function (err, data) {
    var lines = data.toString().replace('\r', '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      console.log(parse(lines[i], 16));
    }
    process.exit(0);
  });
} ());