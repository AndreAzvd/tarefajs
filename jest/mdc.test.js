const {maior} = require('./mdc.js');

describe('mdc', () => {

  test('retorna o MDC de 18 e 6', () => {
    expect(maior(18, 6)).toBe(6);
  });

  test('retorna o MDC de 10 e 15', () => {
    expect(maior(10, 15)).toBe(5);
  });
});
