var fs = require('fs')
  , args = process.argv;
  
args.splice(0, 2);

if (!args.length) {
  console.log('No input file specified.');
  process.exit(1);
}

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().replace('\r', '').split('\n');
  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split(',')
      , x = parseInt(parts[0])
      , n = parseInt(parts[1])
      , r = n, m = 1;
    
    while (r <= x) {
      r = n * m;
      m++;
    }
    
    console.log(r);
  }
  
  process.exit(0);
});