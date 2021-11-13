type RollFn = (pins: number) => void
type ScoreFn = () => number

import BowlingGame from './BowlingGame';
const bg = new BowlingGame();

export const roll: RollFn = (pins: number) => bg.roll(pins);
export const score: ScoreFn = () => bg.score();