class Score {
  static counter: number = 0;

  constructor(counter: number) {
    Score.counter = counter;
  }

  static add() {
    return (Score.counter = Score.counter + 1);
  }
  static minus() {
    return (Score.counter = Score.counter - 1);
  }
}

console.log(Score.add());
console.log(Score.add());
