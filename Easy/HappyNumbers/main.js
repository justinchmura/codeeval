var fs = require('fs')
  , args = process.argv;
  
args.splice(0, 2);

if (!args.length) {
  console.log('No input file specified.');
  process.exit(1);
}

fs.readFile(args[0], function (err, data) {
  if (err) throw err;
  var lines = data.toString().split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length) {
      var num = lines[i].replace('\r', '')
        , counter = 0
        , max = 10000;
      while (parseInt(num) !== 1 && counter <= max) {
        var sum = 0, digits = num.split('');
        for (var j = 0; j < digits.length; j++) {
          sum += Math.pow(parseInt(digits[j]), 2);
        }
        num = sum.toString();
        counter++;
      }
      
      console.log(parseInt(num) === 1 ? 1 : 0);
    }
  }
  
  process.exit(0);
});