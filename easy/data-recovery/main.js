function parseCode(words, indeces) {
  var sorted = indeces.slice(0).sort(), i;
  var max = words.length > sorted[sorted.length - 1]
    ? words.length : sorted[sorted.length - 1];
  for (i = 1; i <= max; i++) {
    if (indeces.indexOf(i) < 0) { indeces.push(i); }
  }
  return indeces;
}

require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').forEach(function (line) {
    if (!line) { return; }
    var parts = line.split(';');
    var words = parts[0].split(' ');
    var indeces = parseCode(words, parts[1].split(' ').map(function (n) { 
      return parseInt(n);
    }));
    console.log(words.reduce(function (prev, word, i) {
      prev[indeces[i]] = word;
      return prev;
    }, []).join(' '));
  });
});
