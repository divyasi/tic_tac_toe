const Game = function() {
  this.players = [];
  this.currentIndex = 0;
};

Game.prototype.isMoveAlreadyPresent = function(move) {
  return this.players[0].hasMove(move) || this.players[1].hasMove(move)
};


Game.prototype.updateMove = function(position) {
  let player = this.players[this.currentIndex];
  player.moves.push(position);
  this.currentIndex = 1 - this.currentIndex;
};

Game.prototype.hasMatchDrawn = function() {
  let player1Moves = this.players[0].moves;
  let player2Moves = this.players[1].moves;
  let totalMoves = player1Moves.concat(player2Moves);
  if (totalMoves.length == 9) {
    return !this.players[0].hasPlayerWon(player1Moves) && !this.players[1].hasPlayerWon(player2Moves);
  }
}

// module.exports = Game;
