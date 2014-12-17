var fs = require('fs');

function isHappy(n, memory) {
  if (!memory) { memory = []; }
  var candidate = n.split('').reduce(function (prev, digit) {
    prev += Math.pow(parseInt(digit), 2);
    return prev;
  }, 0);
  if (candidate === 1) { return 1; }
  if (memory.indexOf(candidate) > -1) { return 0; }
  memory.push(candidate);
  return isHappy(candidate.toString(), memory);
}
  
fs.readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').filter(function (line) {
    return line.length > 0;
  }).forEach(function (line) {
    console.log(isHappy(line));
  });
});
