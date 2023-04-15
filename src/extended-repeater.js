const { NotImplementedError } = require("../extensions/index.js");

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
  if (typeof str !== "string") str = `${str}`;
  if (typeof options.addition !== "string") `${options.addition}`;
  if (options.addition === null) options.addition = "null";
  if (options.addition == undefined) options.addition = "";
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";
  let resStr =
    str +
    repeatStr(
      options.addition,
      options.additionSeparator,
      options.additionRepeatTimes
    );

  return repeatStr(resStr, options.separator, options.repeatTimes);
}
function repeatStr(str, separator, n) {
  return `${str + (separator + str).repeat(n - 1)}`;
}
module.exports = {
  repeater,
};
