/**
 * 
 * @param {number} a premier parametre de la division
 * @param {number} b deuxieme parametre de la division
 * @returns 
 */
const division = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return Error('Number excpected as parameters')
	}
	return a / b
}

export default division
