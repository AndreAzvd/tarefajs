module.exports = sum;

Depois na mesma pasta, crie um arquivo chamado soma.test.js e insira o código:

const sum = require('./soma');

test('adds 1 + 2 to equal 3', () => {

expect(sum(1, 2)).toBe(3);

});