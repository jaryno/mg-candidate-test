# mg-candidate-test

Welcome,
you probably recieved a link to this repository.

The repository contains two exercises which will examine your knowledge and habits. The task entry is described in separate readme files. Please process them and send them back.
- [01 | Score a bowling game](./src/01/README.md)
- [02 | Knapsack](./src/02/README.md)

The repository is ready for development with predefined tools:
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ESlint](https://eslint.org/)

You can install any other tools, if necessary.

In case of questions, do not hesitate to refer to the contacts you got in your email.

The main criteria for evaluation are functionality and code.

Thank you in advance for your time and interest.

## Getting Started

You can fork this repository via github or simple clone this repository.

```bash
# If you used fork then change the url
git clone https://github.com/lkudry/mg-candidate-test.git
cd mg-candidate-test

# Install dependencies
npm install

# Now you can use npm tasks:
npm run start:dev:01
npm run start:dev:02
npm run test
npm run test:watch
npm run lint
```

## Tests with Jest

You can write Jest tests like this:
```ts
import { roll, score } from './index.ts'

it('foo', () => {
    expect(1).toBe(1)
});

it('greeting', () => {
    roll(10)
    expect(score()).toBe(10)
});
```

Run the tests with npm test, no separate compile step is necessary.
[See also the Jest documentation](https://jestjs.io/docs/api).
