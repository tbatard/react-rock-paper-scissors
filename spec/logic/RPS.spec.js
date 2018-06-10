import RPS from './../../src/logic/RPS';
import { ButtonValues } from './../../src/components/Button'
import { GameResults } from './../../src/logic/RPS'

describe("RPS", function() {
  it('returns player1 when player1 has a superior value', () => {
    expect(RPS.getWinner(ButtonValues.rock, ButtonValues.scissors)).toBe(GameResults.player1);
    expect(RPS.getWinner(ButtonValues.paper, ButtonValues.rock)).toBe(GameResults.player1);
    expect(RPS.getWinner(ButtonValues.scissors, ButtonValues.paper)).toBe(GameResults.player1);
  });

  it('returns player2 when player2 has a superior value', () => {
    expect(RPS.getWinner(ButtonValues.rock, ButtonValues.paper)).toBe(GameResults.player2);
    expect(RPS.getWinner(ButtonValues.paper, ButtonValues.scissors)).toBe(GameResults.player2);
    expect(RPS.getWinner(ButtonValues.scissors, ButtonValues.rock)).toBe(GameResults.player2);
  });

  it('returns draw when player2 and player1 have same value', () => {
    expect(RPS.getWinner(ButtonValues.rock, ButtonValues.rock)).toBe(GameResults.draw);
    expect(RPS.getWinner(ButtonValues.paper, ButtonValues.paper)).toBe(GameResults.draw);
    expect(RPS.getWinner(ButtonValues.scissors, ButtonValues.scissors)).toBe(GameResults.draw);
  });
});
