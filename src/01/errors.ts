export const errorTextGameOver = () => 'cannot roll - game over';
export const errorTextCannotRollPins = (pins: number) =>
  `Cannot roll with ${pins} pins`;
export const errorTextCannotRollPinsLeft = (pins: number, left: number) =>
  `Cannot roll with ${pins} pins, only ${left} pins left!`