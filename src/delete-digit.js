const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  for (let i = 0; i < `${n}`.length - 1; i++) {
    if (`${n}`[i] < `${n}`[i + 1]) {
      return Number(`${n}`.replace(`${n}`[i], ""));
    }
  }
  return Number(`${n}`.replace(`${n}`[`${n}`.length - 1], ""));
}

module.exports = {
  deleteDigit,
};
