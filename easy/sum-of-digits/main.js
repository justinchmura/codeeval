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
    var nums = lines[i].split('')
      , sum = 0;
    
    for (var j = 0; j < nums.length; j++) {
      sum += parseInt(nums[j]);
    }
    
    console.log(sum);
  }
  
  process.exit(0);
});