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
