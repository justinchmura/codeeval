var fs = require('fs')
  , args = process.argv;
  
args.splice(0, 2);

if (!args.length) {
  console.log('No input file specified.');
  process.exit(1);
}

fs.stat(args[0], function (err, stats) {
  if (err) throw err;
  console.log(stats.size);
});