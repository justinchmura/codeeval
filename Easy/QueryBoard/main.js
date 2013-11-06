(function () {

  function createBoard() {
    var board = [];
    for (var i = 0; i < 256; i++) {
      board[i] = [];
      for (var j = 0; j < 256; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  }
  
  function setRow(i, n) {
    for (var j = 0; j < 256; j++) {
      board[i][j] = n;
    }
  }
  
  function setCol(i, n) {
    for (var j = 0; j < 256; j++) {
      board[j][i] = n;
    }
  }
  
  function sumRow(i) {
    var sum = 0;
    for (var j = 0; j < 256; j++) {
      sum += board[i][j];
    }
    return sum;
  }
  
  function sumCol(i) {
    var sum = 0;
    for (var j = 0; j < 256; j++) {
      sum += board[j][i];
    }
    return sum;
  }

  var fs = require('fs'), board = createBoard();
  fs.readFile(process.argv[2], function (err, data) {
    var lines = data.toString().replace('\r', '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var parts = lines[i].split(' ');
      switch (parts[0]) {
        case 'SetRow':
          setRow(parseInt(parts[1], 10), parseInt(parts[2], 10));
          break;
        case 'SetCol':
          setCol(parseInt(parts[1], 10), parseInt(parts[2], 10));
          break;
        case 'QueryRow':
          console.log(sumRow(parseInt(parts[1], 10)));
          break;
        case 'QueryCol':
          console.log(sumCol(parseInt(parts[1], 10)));
          break;
      }
    }
    process.exit(0);
  });
} ());