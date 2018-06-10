import { ButtonValues } from './../components/Button'

export const GameResults = {
  player1: "Player 1 wins",
  player2: "Player 2 wins",
  draw: "Draw !",
  none: ''
}

export default class RPS {
  static getWinner(p1, p2) {
    if (p1 === p2) {
      return GameResults.draw;
    }
    
    if ((p1 === ButtonValues.rock && p2 === ButtonValues.scissors)
      || (p1 === ButtonValues.paper && p2 === ButtonValues.rock)
      || (p1 === ButtonValues.scissors && p2 === ButtonValues.paper)) {
      return GameResults.player1;
    } else {
      return GameResults.player2;
    }
  }
}
