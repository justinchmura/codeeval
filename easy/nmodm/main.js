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
        , n = parseInt(parts[0])
        , m = parseInt(parts[1])
        , divided = n / m
        , dec = divided - Math.floor(divided);
      console.log(Math.round(m * dec));
    }
  }
  
  process.exit(0);
});