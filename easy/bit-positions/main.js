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
      , n = parseInt(parts[0]).toString(2).split('').reverse().join('')
      , p1 = parseInt(parts[1]) - 1
      , p2 = parseInt(parts[2]) - 1;
    console.log(n[p1] === n[p2]);
  }
  
  process.exit(0);
});