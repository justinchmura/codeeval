require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').forEach(function (line) {
    if (!line) { return; }
    var parts = line.split(' ');
    var c = parts[parts.length - 1 - parseInt(parts[parts.length - 1])];
    if (c) { console.log(c); }
  });
});
