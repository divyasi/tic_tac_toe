let assert = require('chai');
let player = require('../src/player.js');
let test = {};

test['hasMove should recongnise true wheather move is already present'] = function() {
  let move = 1;
  let moves = [1,2,3];
  assert.isOk(hasMove(move),true);
};


exports.test = test;
