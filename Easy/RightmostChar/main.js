var fs = require('fs')
  , args = process.argv;
  
args.splice(0, 2);

if (!args.length) {
  console.log('No input file specified.');
  process.exit(1);
}

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length) {
      var parts = lines[i].replace('\r', '').split(',')
        , str = parts[0]
        , chr = parts[1]
        , found = false;
      for (var j = str.length - 1; j >= 0; j--) {
        if (str[j] === chr) {
          found = true;
          console.log(j);
          break;
        }
      }
      if (!found) console.log(-1);
    }
  }
  
  process.exit(0);
});