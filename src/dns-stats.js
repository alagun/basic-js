const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
     let obj = {};
    for (let i = 0; i < domains.length; i++) {
      let arr = domains[i].split('.').reverse()
      console.log(arr)
      for (let j = 0; j < arr.length; j++) {
       let cur = `.${arr.slice(0, j + 1).join('.')}`
       if (obj[cur]) {
        obj[cur]++;
       }
       else {
        obj[cur] = 1;
       }
      }
    }
    //console.log(obj)
    return obj;
}

module.exports = {
  getDNSStats
};
