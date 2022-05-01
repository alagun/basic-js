const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  // throw new NotImplementedError('Not implemented')
   // remove line with error and write your code here
  
  
  if (typeof(str) !== "string") str = String(str);
  if (typeof(options.addition) !== "string") String(options.addition);
  if (options.addition === null) options.addition = 'null';
  if (options.addition == undefined) options.addition = '';
    options.repeatTimes = options.repeatTimes || 1;
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';	
  
  let fstStr = '';
  for (let fst = 0; fst < options.repeatTimes; fst++) {
    let secStr ='';
    for (let sec = 0; sec < options.additionRepeatTimes; sec++) {
      if (sec == options.additionRepeatTimes -1  ){
        secStr = secStr.concat(`${options.addition}`);
      } else {
      secStr = secStr.concat(`${options.addition}${options.additionSeparator}`);
      }
    }
    fstStr = fstStr.concat(str,secStr);
    if (fst != options.repeatTimes -1 ){
      fstStr = fstStr.concat(options.separator);
    }
  }
  console.log(fstStr);
  return  fstStr
 
  }
module.exports = {
  repeater
};
