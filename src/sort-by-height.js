const { NotImplementedError } = require("../extensions/index.js");

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
function sortByHeight(arr) {
  const index = [],
    res = [];
  arr.forEach((el, ind) => {
    if (el === -1) {
      index.push(ind);
    }
  });
  arr = arr.filter((el) => el > 0).sort((a, b) => a - b);
  let len = arr.length + index.length;
  for (let i = 0; i < len; i++) {
    if (index.includes(i)) {
      res.push(-1);
    } else {
      res.push(arr.shift());
    }
  }
  return res;
}

module.exports = {
  sortByHeight,
};
