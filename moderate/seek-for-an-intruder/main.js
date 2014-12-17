var fs = require('fs');

var matches = [];
var counts = {};

var regexes = [
  { // IP address
    regex: /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g,
    translator: function (input) { return input; }
  },
  { // Hex address
    regex: /(0x[0-9a-fA-F]{1,2})\.((0x[0-9a-fA-F]{1,2})\.){2}(0x[0-9a-fA-F]{1,2})/g,
    translator: function (input) { 
      return input.split('.').map(function (set) { return parseInt(set, 16); }).join('.');
    }
  },
  { // Dotted Octal address
    regex: /([0-7]{4})\.(([0-7]{4})\.){2}([0-7]{4})/g,
    translator: function (input) {
      return input.split('.').map(function (set) { return parseInt(set, 8); }).join('.');
    }
  },
  { // Dotted Binary address
    regex: /[01]{8}\.([01]{8}\.){2}[01]{8}/g,
    translator: function (input) {
      return input.split('.').map(function (set) { return parseInt(set, 2); }).join('.');
    }
  },
  { // Binary address
    regex: /[01]{32}/g,
    translator: function (input) {
      return input.match(/.{1,8}/g).map(function (set) { return parseInt(set, 2); }).join('.');
    }
  },
  { // Octal address
    regex: /[0-7]{12}/g,
    translator: function (input) {
      return input.match(/.{1,3}/g).map(function (set) { return parseInt(set, 8); }).join('.');
    }
  },
  { // Combined Hex address
    regex: /0x[0-9A-Fa-f]{4,8}/,
    translator: function (input) {
      return input.replace('0x', '').match(/.{1,2}/g).map(function (set) { return parseInt(set, 16); }).join('.');
    }
  },
  { // Decimal address
    regex: /[0-9]{8,10}/,
    translator: function (input) {
      return parseInt(input).toString(2).match(/.{1,8}/g).map(function (set) { return parseInt(set, 2); }).join('.');
    }
  }
];

function findMatches(line) {
  line = line.replace(/[^a-fA-F0-9.x]/g, '');
  regexes.forEach(function (obj) {
    var items = line.match(obj.regex);
    if (items) {
      matches = matches.concat(items
        .filter(function (x) { return !!x; })
        .map(function (x) { return obj.translator(x); }));
    }
  });
}

function count() {
  matches.forEach(function (match) {
    if (!counts.hasOwnProperty(match)) {
      counts[match] = 1;
    } else {
      counts[match] += 1;
    }
  });
}

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  data.replace(/\r/g, '').split('\n').filter(function (line) {
    return line.length > 0;
  }).forEach(findMatches);
  count();

  var max = { address: null, count: 0 };
  Object.keys(counts).forEach(function (key) {
    if (counts[key] > max.count) {
      max.address = key;
      max.count = counts[key];
    }
  });

  console.log(max.address);
});
