import division from './division'

describe('test de la fonctionnalité division', () => {
	test('divion de 2 number', () => {
		expect(division(6, 2)).toBe(3)
		expect(division(6, 2)).toEqual(3)
		expect(division(6, 0)).toEqual(Infinity)
		expect(typeof division(6, 0)).toBe('number')
		expect(division('toto', 'tata')).toEqual(
			Error('Number excpected as parameters')
		)
	})
})
