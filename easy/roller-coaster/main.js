require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').forEach(function (line) {
    var fn = 'toLowerCase';
    console.log(line.split('').map(function (c) {
      if (!(/[a-z]/gi.test(c))) { return c; }
      fn = fn === 'toLowerCase' ? 'toUpperCase' : 'toLowerCase';
      return c[fn]();
    }).join(''));
  });
});
