require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').map(function (line) {
    return line.toLowerCase().replace(/[^a-z]/ig, '').split('').sort();
  }).forEach(function (chars) {
    var weight = 26;
    var counts = chars.reduce(function (prev, c, i, self) {
      if (!prev.hasOwnProperty(c)) { prev[c] = 1; }
      else { prev[c] += 1; }
      return prev;
    }, {}); 
    var sum = Object.keys(counts).sort(function (left, right) {
      if (counts[left] > counts[right]) { return -1; }
      if (counts[left] < counts[right]) { return 1; }
      return 0;
    }).reduce(function (prev, key) {
      prev += counts[key] * weight--;
      return prev;
    }, 0);
    console.log(sum);
  });
});
