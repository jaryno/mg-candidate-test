import { errorTextCannotRollPins, errorTextCannotRollPinsLeft, errorTextGameOver } from './errors';

const MAX_PINS = 10;
const MAX_ROUNDS = 10;

class BowlingGame {

  private readonly frames: number[][];

  constructor() {
    this.frames = [[]];
  }

  roll(pins: number) {
    if(pins > MAX_PINS) {
      throw new Error(errorTextCannotRollPins(pins));
    }

    const i = this.frames.length - 1;

    if(this.isLastFrame(i)) {

      if(this.frames[i].length < 3) {
        this.pushToLastFrame(this.frames[i], pins);
        return;
      }
      throw new Error(errorTextGameOver());

    } else {

      this.pushToFrame(this.frames[i], pins);
      if(this.frames[i].length === 2 || pins === MAX_PINS) {
        this.frames.push([]);
      }

    }
  }

  private isLastFrame(index: number) {
    return index >= MAX_ROUNDS - 1;
  }

  private pushToFrame(frame: number[], pins: number) {
    if(frame.length === 1 && (frame[0] + pins) > MAX_PINS) {
      throw new Error(errorTextCannotRollPinsLeft(pins, MAX_PINS - frame[0]))
    }
    frame.push(pins);
  }

  private pushToLastFrame(frame: number[], pins: number) {
    const firstRoll = frame[0];
    const secRoll = frame[1];
    if(frame.length === 1 && firstRoll < MAX_PINS && firstRoll + pins > MAX_PINS) {
      throw new Error(errorTextCannotRollPinsLeft(pins, MAX_PINS - firstRoll));
    }
    if(frame.length === 2 && secRoll < MAX_PINS && secRoll + pins > MAX_PINS) {
      throw new Error(errorTextCannotRollPinsLeft(pins, MAX_PINS - secRoll));
    }
    frame.push(pins);
  }

  score(): number {

    let sum = 0;
    let index = 0;
    let round = 1;

    const rolls = this.getRolls();

    while(index < rolls.length) {
      if(rolls[index] == null || round > MAX_ROUNDS) {
        break;
      }

      if(this.isStrike(rolls, index)) {

        sum += this.calcStrike(rolls.slice(index));
        index++;

      } else {
        if(this.isSpare(rolls, index)) {
          sum += this.calcSpare(rolls, index)
        } else {
          sum += rolls[index] + this.getRollValue(rolls,index + 1);
        }
        index += 2;
      }
      round++
    }
    return sum;
  }

  private isStrike(rolls: number[], index: number): boolean {
    return rolls[index] == MAX_PINS
  }

  private isSpare(rolls: number[], index: number): boolean {
    return rolls[index] + rolls[index + 1] === MAX_PINS
  }

  private calcStrike(rolls: number[]): number {
    if(this.isNthStrike(3, rolls)) {
      return MAX_PINS * 3;
    }

    if(this.isNthStrike(2, rolls)) {
      return MAX_PINS * 2 + this.getRollValue(rolls, 2);
    }

    return MAX_PINS + this.getRollValue(rolls,1) + this.getRollValue(rolls, + 2);
  }

  private isNthStrike(n: number, rolls: number[]) {
    if(rolls.length < n) {
      return false;
    }
    return rolls.slice(0, n).every(pins => pins === MAX_PINS);
  }

  private calcSpare(rolls: number[], index: number): number {
    return rolls[index] + this.getRollValue(rolls,index + 1) + this.getRollValue(rolls,index + 2);
  }

  private getRolls(): number[] {
    const rolls = [];
    for(const frame of this.frames) {
      for(const pins of frame) {
        rolls.push(pins);
      }
    }
    return rolls;
  }

  private getRollValue(rolls: number[], i: number): number {
    return rolls[i] ? rolls[i] : 0
  }

}

export default BowlingGame;