var fs = require('fs');

function parse(line) {
  var split = line.trim().split(' | ');
  var convert = function (code) { return parseInt(code); };
  return [parseInt(split[0]), split[1], split[2].split(' ').map(convert)];
}

function decrypt(data) {
  var repeated = findRepeatsOfLength(data[2], data[0]);
  return repeated.map(function (repeat) {
    var n = parseInt(repeat[repeat.length - 1]) - data[1].charCodeAt();
    return data[2].map(function (ascii) {
      return String.fromCharCode(ascii - n);
    }).join('');
  }).filter(function (msg, i, self) {
    return self.indexOf(msg) === i && msg.indexOf(' ') > 0;
  })[0];
}

function findRepeatsOfLength(arr, length) {
  var result = [], i, j;
  var temp1, temp2;
  for(i = 0; i < arr.length; ++i) {
    temp1 = arr.slice(i, i + length);
    for (j = i + 1; j < arr.length; ++j) {
      temp2 = arr.slice(j, j + length);
      if (equalArrays(temp1, temp2)) {
        result.push(temp1);
      }
    }
  }
  return result;
}

function equalArrays(arr1, arr2) {
  var same = function (u, i) {
    return u === arr2[i];
  };
  return arr1.length === arr2.length && arr1.every(same);
}

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').filter(function (line) {
    return line.length > 0;
  }).map(parse).map(decrypt).forEach(function (msg) {
    console.log(msg);
  });
});

