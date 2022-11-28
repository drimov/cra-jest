/**
 *
 * @param {number} a premier parametre de la multiplication
 * @param {number} b deuxieme parametre de la multiplication
 */
const multiplication = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return Error('Number expected as parameters')
	}
	return a * b
}
export default multiplication
