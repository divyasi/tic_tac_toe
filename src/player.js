let winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

const isSubset = function(superSet, subSet) {
  return subSet.every(function(element) {
    return superSet.includes(element);
  });
};

const Player = function(playerName, symbol) {
  this.name = playerName;
  this.symbol = symbol;
  this.moves = [];
};

Player.prototype.hasMove=function(move) {
  return this.moves.includes(move);
}

Player.prototype.hasPlayerWon = function() {
  let playerMoveSet = this.moves;
  return winningCombinations.some(function(combination) {
    return isSubset(playerMoveSet, combination);
  })
};

module.exports = Player;
