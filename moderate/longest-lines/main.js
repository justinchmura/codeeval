var fs = require('fs');
var args = process.argv;

args.splice(0, 2);

if (!args.length) process.exit(1);

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().replace(/\r/g, '').split('\n');
  var limit = parseInt(lines.shift());
  var valid = [];
  lines.sort(function (left, right) {
    return right.length - left.length;
  }).slice(0, limit).forEach(function (line) {
    console.log(line);
  });
});
