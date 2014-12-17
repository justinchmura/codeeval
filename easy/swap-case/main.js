require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').forEach(function (line) {
    console.log(line.split('').map(function (c) {
      if (c === c.toLowerCase()) { return c.toUpperCase(); }
      return c.toLowerCase();
    }).join(''));
  });
});
