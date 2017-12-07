/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) { // input board length || board pieces
  var solution = new Board({'n': n}); // a decision tree that evaluates all possible pieces and returns the first true solution
  var pieceCount = 0;
  for (var i = 0; i < n; i++) {
    solution[i] = new Array(n).fill(0);
  }
  /*{"0":[1,0,0,0],
     "1":[0,0,0,0],
     "2":[0,0,0,0],
     "3":[0,0,0,0],
     "n":4}
  */
  
  // for (var column = 0; i < n; i++) {
  //   results.push(findNextAvailableSpot(solution, 0, i));
  // }
  
  var findNextAvailableSpot = function(board, row = 0, column = 0) {
  // base case: n pieces have been added to the board or there are no more available spaces
    if (pieceCount === n) {
      return solution;
    } else {
    // recursive: there are more spaces to add pieces
      if (!solution.hasRowConflictAt(row) && !solution.hasColConflictAt(column) && solution._isInBounds(row, column)) {
        solution[row][column] = 1;
        pieceCount++;
        return findNextAvailableSpot(solution, row, column);
      }
    }
  };

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return findNextAvailableSpot(solution);
}; // stringified object of arrays that meet all helper tests

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
