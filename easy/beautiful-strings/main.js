(function () {

  function computeOccurrences(line) {
    var chars = line.toLowerCase().split('').sort(), occurrences = [];
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i]
        , occ = (chars.lastIndexOf(c) - chars.indexOf(c)) + 1;
      occurrences.push(occ);
      i += occ - 1;
    }
    return occurrences;
  }
  
  function computeScore(occurrences) {
    var weight = 26, sum = 0;
    occurrences.sort();
    for (var i = occurrences.length - 1; i >= 0; i--) {
      var multi = occurrences[i];
      occurrences[i] = multi * weight--;
      sum += occurrences[i];
    }
    return sum;
  }

  var fs = require('fs');
  fs.readFile(process.argv[2], function (err, data) {
    var lines = data.toString().replace(/[^\w\n]|_|\r/g, '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      console.log(computeScore(computeOccurrences(lines[i])));
    }
    process.exit(0);
  });
} ());