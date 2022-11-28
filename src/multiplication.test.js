//R --> rouge : test qui échoue
//V --> vert : test ok
//R --> refactor
import multiplication from './multiplication'

describe('test de la fonctionnalité multiplication', () => { 
    test('multiplication de 2 number', () => { 
        expect(multiplication(2,3)).toBe(6)
        expect(typeof multiplication(2,3)).toBe('number')
        expect(multiplication(2,3)).toEqual(6)
        expect(multiplication('toto','tata')).toEqual(Error('Number expected as parameters'))
     })
 })