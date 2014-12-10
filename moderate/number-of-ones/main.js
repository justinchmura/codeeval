var fs = require('fs');
var args = process.argv;

args.splice(0, 2);

if (!args.length) process.exit(1);

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().replace(/\r/g, '')
    .split('\n')
    .filter(function (token) {
      return token.length > 0;
    });
  lines.forEach(function (line) {
    var num = (parseInt(line).toString(2).match(/1/g) || []).length;
    console.log(num);
  });
});
