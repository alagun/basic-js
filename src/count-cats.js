const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  matrix=matrix.flat();
  let p = 0;
  for (let index = 0; index < matrix.length; index++) {
   if (matrix[index] == '^^'){
     p++
   }
  }  
  return p
}

module.exports = {
  countCats
};
