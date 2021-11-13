import { calcValue, items, items2, knapsack } from './index';

it('test items', () => {
  const kItems = knapsack(items, 10);
  expect(kItems.length).toBe(2)
});

it('test items total weight', () => {
  const kItems = knapsack(items, 10);
  expect(calcValue(kItems)).toBe(90)
});


it('test items 2', () => {
  const kItems = knapsack(items2, 5);
  expect(kItems.length).toBe(2)
});

it('test items 2 total weight', () => {
  const kItems = knapsack(items2, 5);
  expect(calcValue(kItems)).toBe(10)
});