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
        , digits = num.split('')
        , isSelfDesc = true;
      for (var j = 0; j < digits.length; j++) {
        if (num.split(j).length - 1 !== parseInt(digits[j])) {
          isSelfDesc = false;
          break;
        }
      }
      
      console.log(isSelfDesc ? 1 : 0);
    }
  }
  
  process.exit(0);
});