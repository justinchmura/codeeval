var fs = require('fs');
var args = process.argv;
var stack = [];

args.splice(0, 2);
if (!args.length) process.exit(1);

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().replace(/\r/g, '').split('\n').filter(function (line) {
    return line.length > 0;
  });
  lines.forEach(function (line) {
    var num, i = 0, items = [];
    line.split(' ').forEach(function (i) { stack.push(i); });
    while (stack.length > 0) {
      num = stack.pop();
      if (i % 2 === 0) items.push(num);
      i++;
    }
    console.log(items.join(' '));
  });
});
