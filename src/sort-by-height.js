const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resArr = [];
 let prevArr = [];
 for (let i = 0; i < arr.length; i++) {
	 if (arr[i] == -1){
		 resArr[i] = -1;
	 } else {
		prevArr.push(arr[i])
	 }
 }
 prevArr.sort((a,b)=>(a-b));
 for (let ind = 0; ind < arr.length; ind++) {
	if (resArr[ind] == -1){
		
	} else {
		resArr[ind] = prevArr[0];
		prevArr.shift()
	}
 }
//  console.log(resArr)
//  console.log(prevArr)
 return resArr;
}


module.exports = {
  sortByHeight
};
