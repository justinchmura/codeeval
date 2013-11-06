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
      , unique = [];
    
    for (var j = 0; j < parts.length; j++) {
      if (unique.indexOf(parts[j]) < 0) {
        unique.push(parts[j]);
      }
    }
    
    console.log(unique.join(','));
  }
  
  process.exit(0);
});