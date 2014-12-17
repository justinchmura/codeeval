var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').filter(function (line) {
    return line.length > 0;
  }).forEach(function (line) {
    var digits = line.split(''), i, selfDesc = true;
    for (i = 0; i < digits.length; i++) {
      if (line.split(i).length - 1 !== parseInt(digits[i])) {
        selfDesc = false;
        break;
      }
    }
    console.log(selfDesc ? 1 : 0);
  });
});
