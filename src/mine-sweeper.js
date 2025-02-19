const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const resArr = [];
	for (let i = 0; i < matrix.length; i++) {
	  resArr[i] = matrix[i].slice();
	}
	for (let i = 0; i < resArr.length; i++) {
 	  for (let j = 0; j < resArr[i].length; j++) {
		 resArr[i][j] = 0;
		}
	}
	//console.log(resArr)
	for (let i = 0; i < resArr.length; i++) {
	 	for (let j = 0; j < resArr[i].length; j++) {
	 		if (matrix[i][j] == true) {
	 			if(i - 1 >= 0){
	 				if(j - 1 >= 0 && matrix[i-1][j-1] != true){
	 					resArr[i-1][j-1]++;
					}
					if(j>= 0 && matrix[i-1][j] != true){
						resArr[i-1][j]++;
				   }
					if(j + 1 < resArr[i].length && matrix[i-1][j+1] != true){
						resArr[i-1][j+1]++;
					}
				}			
				if(j - 1 >= 0 && matrix[i][j-1] != true){
						resArr[i][j-1]++;
				}			
				
				resArr[i][j]=1;

				if(j + 1 < resArr[i].length && matrix[i][j+1] != true){
					resArr[i][j+1]++;
				}
				if(i + 1 < resArr.length ){
					if(j - 1 >= 0 && matrix[i+1][j-1] != true){
						resArr[i+1][j-1]++;
				   }
			 		if(j>= 0 && matrix[i+1][j] != true){
						resArr[i+1][j]++;
				   }
					if(j + 1 < resArr[i].length && matrix[i+1][j+1] != true){
						resArr[i+1][j+1]++;
					}
				}	
			}
	 	}
	}

 return resArr;
}

module.exports = {
  minesweeper
};
