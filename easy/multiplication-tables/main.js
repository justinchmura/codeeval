String.prototype.lpad = function(pad, length) {
    var str = this;
    while (str.length < length) str = pad + str;
    return str;
}

var table = [];
for (var top = 0; top < 12; top++) {
  table.push([(top + 1).toString().lpad(' ', 4)]);
  for (var left = 1; left < 12; left++) {
    table[top].push(((left + 1) * (top + 1)).toString().lpad(' ', 4));
  }
}

for (var i = 0; i < 12; i++) {
  var line = '';
  for (var j = 0; j < 12; j++) {
    var num = table[j][i];
    if (j === 0) num = num.replace(/^\s+|\s+$/g, '');
    line += num;
  }
  console.log(line);
}