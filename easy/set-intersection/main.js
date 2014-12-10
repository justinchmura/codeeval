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
    if (lines[i].length) {
      var lists = lines[i].split(';')
        , list1 = lists[0].split(',')
        , list2 = lists[1].split(',')
        , intersection = '';
      
      for (var j = 0; j < list1.length; j++) {
        if (list2.indexOf(list1[j]) > -1) {
          intersection += ',' + list1[j];
        }
      }
      
      console.log(intersection.slice(1));
    }
  }
  
  process.exit(0);
});