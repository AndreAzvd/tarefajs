const {min, max} = require('./indice.js');

describe('indice', () =>{

    it('min retorna menor valor', () => {
        expect(min([2,3,1])).toBe(1);
    });

    it('max retorna maior valor', () => {
        expect(max([2,3,1])).toBe(3);
    });
})