const {mdc}= require('\tarefa js\mdc.js')
const {indice}= require('\tarefa js\indice.js')
const {somas}= require('\tarefa js\somas.js')
 
describe('mdc', () =>{
    it('', () =>{
        expect(mdc).toBe(maior)
    } )
})

describe('indice', () =>{
    it('', () =>{
        expect(indice).toBe(Array.min(random), Array.max(random))
    } )
})

describe('somas', () =>{
    it('', () =>{
        expect(somas).toBe(171571)
    } )
})