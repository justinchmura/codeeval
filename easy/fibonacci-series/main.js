var fs = require('fs')
  , args = process.argv;
  
args.splice(0, 2);

if (!args.length) {
  console.log('No input file specified.');
  process.exit(1);
}

function fib(n){
  var prev = -1, result = 1, sum;
  for (var i = 0; i <= n; i++) {
    sum = result + prev;
    prev = result;
    result = sum;
  }
  return result;
}

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().replace('\r', '').split('\n');
  for (var i = 0; i < lines.length; i++) {
    console.log(fib(parseInt(lines[i])));
  }
  process.exit(0);
});