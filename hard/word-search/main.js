var board = [['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E']];

function createPositionMap() {
  return {
    'A': [[0,0],[2,0]],
    'B': [[0,1]],
    'C': [[0,2],[1,2]],
    'D': [[2,1]],
    'E': [[0,3],[2,2],[2,3]],
    'F': [[1,1]],
    'S': [[1,0],[1,3]]
  };
}

function createCheckMap() {
  return [[false, false, false, false],
      [false, false, false, false],
      [false, false, false, false]];
}

function search(word, startx, starty) {
  var visited = createCheckMap();

  function check(x, y, index) {
    if (index === word.length) { return true; }                 // End of word
    if (x < 0 || x >= 3 || y < 0 || y >= 4) { return false; }   // Outside of board
    if (visited[x][y]) { return false; }                        // Already checked
    if (board[x][y] !== word.charAt(index)) { return false; }   // Not a match
    visited[x][y] = true;                                       // Flag as checked
    if (check(x, y - 1, index + 1)) { return true; }            // Check down
    if (check(x, y + 1, index + 1)) { return true; }            // Check up
    if (check(x - 1, y, index + 1)) { return true; }            // Check left
    if (check(x + 1, y, index + 1)) { return true; }            // Check right
    return false;
  }

  return check(startx, starty, 0);
}

require('fs').readFile(process.argv[2], 'utf8', function (err, data) {
  var map = createPositionMap();
  data.replace(/\r/g, '').split('\n').forEach(function (word) {
    var result;
    if (!word) { return; }
    map[word.charAt(0)].some(function (position) {
      if (search(word, position[0], position[1])) { 
        result = true;
        return true;
      }
      return false;
    });
    console.log(result ? 'True' : 'False');
  });
});

