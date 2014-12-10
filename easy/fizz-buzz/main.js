(function () {
  var fs = require('fs'), parse = parseInt;
  fs.readFile(process.argv[2], function (err, data) {
    var lines = data.toString().replace('\r', '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var parts = lines[i].split(' '), result = '';
      for (var j = 1; j <= parse(parts[2]); j++) {
        var f = (j % parse(parts[0])) === 0
          , b = (j % parse(parts[1])) === 0;
        if (f && b) result += 'FB ';
        else if (f) result += 'F ';
        else if (b) result += 'B ';
        else result += j + ' ';
      }
      console.log(result.replace(/^\s+|\s+$/g, ''));
    }
    process.exit(0);
  });
} ());