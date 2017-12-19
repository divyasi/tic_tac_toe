let game = new Game();
const getMove = function() {
  let cell = event.target.id;
  return +cell;
};

const createPlayer = function() {
  game.players.push(new Player('Player 1', 'X'));
  game.players.push(new Player('Player 2', 'O'));
};

const updateMoveOnDisplay = function(position,player) {
  document.getElementById(position).innerText = player.symbol;
};

const stopGame = function() {
  let table = document.getElementById("tic-tac-toe");
  table.onclick = null;
};

const showTurn = function() {
  let player = game.players[game.currentIndex];
  document.getElementById('display').innerText = `${player.name} turn`;
};

const actionOnClick = function() {
  let move = getMove();
  let player = game.players[game.currentIndex];
  if (game.isMoveAlreadyPresent(move)) {
    return;
  };
  game.updateMove(move);
  updateMoveOnDisplay(move,player);
  showTurn();
  if (player.hasPlayerWon()) {
    document.getElementById('display').innerText =`${player.name} won`;
    stopGame();
  }else if (game.hasMatchDrawn()) {
    document.getElementById('display').innerText =`match drawn`;
    stopGame();
  }
};

const startGame = function() {
  let table = document.getElementById('tic-tac-toe');
  table.onclick = actionOnClick;
};

const loadGame = function() {
  startGame();
  createPlayer();
  showTurn();
};

window.onload = loadGame;
