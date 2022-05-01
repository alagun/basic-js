const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 
function deleteDigit( n ) {
	// throw new NotImplementedError('Not implemented');
	 // remove line with error and write your code here
	 n = String(n);
	 let arr = []
	 for (let i = 0; i < n.length; i++) {
		 let cur = n.slice(0, i) + n.slice(i + 1)
		arr.push(Number(cur));
	 }
	 arr.sort((a,b)=> b-a);
	return arr[0]
  }
  
  

module.exports = {
  deleteDigit
};
