import { roll, score } from './index'
import BowlingGame from './BowlingGame';
import { errorTextCannotRollPinsLeft } from './errors';


it('bowling 1', () => {
  roll(10);
  roll(5);
  roll(5);
  roll(9);
  roll(0);

  expect(score()).toBe(48)
});


it('test fullscore', () => {
  const bg = new BowlingGame();

  for(let i = 0; i < 12; i++) {
    bg.roll(10);
  }

  expect(bg.score()).toBe(300)
});


it('test looser', () => {
  const bg = new BowlingGame();

  for(let i = 0; i < 12; i++) {
    bg.roll(0);
  }

  expect(bg.score()).toBe(0);
});

it('test error', () => {
  const bg = new BowlingGame();

  bg.roll(8);

  expect(() => {
    bg.roll(3);
  }).toThrow(errorTextCannotRollPinsLeft(3, 2));
});

it('test 3x strike', () => {
  const bg = new BowlingGame();

  bg.roll(10);
  bg.roll(10);
  bg.roll(10);
  bg.roll(10);
  bg.roll(10);
  bg.roll(10);

  bg.roll(0); bg.roll(0);

  expect(bg.score()).toBe(150);
});

it('test random game', () => {
  const bg = new BowlingGame();

  bg.roll(3); bg.roll(4);
  bg.roll(6); bg.roll(4);
  bg.roll(6); bg.roll(3);
  bg.roll(6); bg.roll(2);
  bg.roll(7); bg.roll(3);
  bg.roll(10);
  bg.roll(4); bg.roll(6);
  bg.roll(8); bg.roll(2);
  bg.roll(4); bg.roll(5);
  bg.roll(4); bg.roll(5);

  expect(bg.score()).toBe(130);
});
