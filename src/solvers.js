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

window.findNRooksSolution = function(n) { 
  var solution = [];
  var board = new Board({'n': n}); 
  
  var findSolution = function(rowIndex) {
    for (var column = 0; column < board.get('n'); column++) {
      if (rowIndex === n) {
        for (var i = 0; i < n; i++) {
          solution[i] = board.get(i);
        }
        return solution;
      } else { 
        board.togglePiece(rowIndex, column);       
        if (!board.hasAnyRooksConflicts()) {
          return findSolution(rowIndex + 1);
        }
        board.togglePiece(rowIndex, column);
      }
    }
  };
  
  findSolution(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
}; 

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({'n': n});
  
  var findCount = function(rowIndex) {
    if (rowIndex === n) {
      solutionCount++;
      return;
    }
    for (var column = 0; column < n; column++) {
      // need to stay on this row to find all possible avenues
      board.togglePiece(rowIndex, column);
      if (!board.hasAnyRooksConflicts()) {
        findCount(rowIndex + 1);
      }
      board.togglePiece(rowIndex, column);
    }
  };
  
  findCount(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = [];
  var board = new Board({'n': n}); // {0: [0], n: 1}
  
  if (n === 2 || n === 3) {
    return {n: n};
  }

  var findSolution = function(rowIndex) {
    if (rowIndex === n) { // 0 does not equal 1 // 1 does = 1
      for (var i = 0; i < board.get('n'); i++) {
        sliceSolutions = board.get(i).slice();
        solutions[i] = sliceSolutions; 
      }
      return;
    }
    for (var column = 0; column < n; column++) { // 0 < 1
      // need to stay on this row to find all possible avenues
      board.togglePiece(rowIndex, column); // [1]
      if (!board.hasAnyQueensConflicts()) {
        findSolution(rowIndex + 1); // row is now 1
      }
      board.togglePiece(rowIndex, column);
    }
  };

  findSolution(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions));
  return solutions;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({'n': n});
  
  var findCount = function(rowIndex) {
    if (rowIndex === n) {
      solutionCount++;
      return;
    }
    
    for (var column = 0; column < n; column++) {
      // need to stay on this row to find all possible avenues
      board.togglePiece(rowIndex, column);
      if (!board.hasAnyQueensConflicts()) {
        findCount(rowIndex + 1);
      }
      board.togglePiece(rowIndex, column);
    }
  };
  
  findCount(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
