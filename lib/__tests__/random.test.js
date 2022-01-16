const randomNumber = require('../lib/random');

test('gets random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessTanOrEqual(10);
});