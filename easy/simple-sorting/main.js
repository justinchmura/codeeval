require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').forEach(function (line) {
    if (!line) { return; }
    console.log(line.split(' ').map(function (num) {
      return parseFloat(num).toFixed(3);
    }).sort(function (left, right) {
      return left - right;
    }).join(' '));
  });
});
