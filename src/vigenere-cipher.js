// const { NotImplementedError } = require('../extensions/index.js');

// /**
//  * Implement class VigenereCipheringMachine that allows us to create
//  * direct and reverse ciphering machines according to task description
//  * 
//  * @example
//  * 
//  * const directMachine = new VigenereCipheringMachine();
//  * 
//  * const reverseMachine = new VigenereCipheringMachine(false);
//  * 
//  * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
//  * 
//  * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
//  * 
//  * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
//  * 
//  * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
//  * 
//  */

// class VigenereCipheringMachine {
//  constructor(direct = true) {
//     this.isDirect = direct;
//   }

//   encrypt(message, key) {
//     if (
//       typeof message != "string" ||
//       typeof key != "string" ||
//       message === false ||
//       key === false
//      ) {
//       throw Error("Incorrect arguments!");
//      }
//     let messageArr = message.toLowerCase();
//     let key = key.toLowerCase()
//     let keyWord = key;
// 	 	while (keyWord.length < message.length){
// 			keyWord = `${keyWord}${key}`
// 	  	}
//     let resArr = []
//     let perem;
//     let count = 0;
//     for (let i = 0; i < messageArr.length; i++) {
//       if (messageArr.charCodeAt(i) > 96 && messageArr.charCodeAt(i) < 123) {
//         if((messageArr.charCodeAt(i) + keyWord.charCodeAt(count) - 97) > 122){
//           perem = messageArr.charCodeAt(i) + keyWord.charCodeAt(count) - 97 - 26;
//         } else {
//           perem = messageArr.charCodeAt(i) + keyWord.charCodeAt(count) - 97;
//         }
//         resArr[i] = String.fromCharCode(perem)
//         count += 1;
//       } else {
//         resArr[i] = messageArr.charAt(i)
//       }

//     }
//     if (this.isDirect == false) resArr.reverse();
//     return resArr.join('').toUpperCase()
//   }
//   decrypt(message, key) {
//     if (
//       typeof message != "string" ||
//       typeof key != "string" ||
//       message === false ||
//       key === false
//      ) {
//       throw Error("Incorrect arguments!");
//     }
//       let messageArr = message.toLowerCase();
//       let key = key.toLowerCase()
//       let keyWord = key;
//        while (keyWord.length < message.length){
//         keyWord = `${keyWord}${key}`
//         }
//       let resArr = []
//       let perem;
//       let count = 0;
//       for (let i = 0; i < messageArr.length; i++) {
//         if (messageArr.charCodeAt(i) > 96 && messageArr.charCodeAt(i) < 123) {
//           if((messageArr.charCodeAt(i) - keyWord.charCodeAt(count) + 97) < 97){
//             perem = messageArr.charCodeAt(i) - keyWord.charCodeAt(count) + 97 + 26;
//           } else {
//             perem = messageArr.charCodeAt(i) - keyWord.charCodeAt(count) + 97;
//           }
//           resArr[i] = String.fromCharCode(perem)
//           count += 1;
//         } else {
//           resArr[i] = messageArr.charAt(i)
//         }
//       }
//       if (this.isDirect == false) resArr.reverse();
//       return resArr.join('').toUpperCase()
//     }
//   }


// module.exports = {
//   VigenereCipheringMachine
// };
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {


  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (
      typeof message != "string" ||
      typeof key != "string" ||
      message === false ||
      key === false
      ) {
        throw Error("Incorrect arguments!");
    }

    let messageArr = message.toLowerCase();
    key = key.toLowerCase();
    let keyWord = key;
	 	while (keyWord.length < message.length){
			keyWord = `${keyWord}${key}`
	  }
    let resArr = [];
    let perem;
    let count = 0;
    for (let i = 0; i < messageArr.length; i++) {
      if (messageArr.charCodeAt(i) > 96 && messageArr.charCodeAt(i) < 123) {
        if((messageArr.charCodeAt(i) + keyWord.charCodeAt(count) - 97) > 122){
          perem =  (messageArr.charCodeAt(i) + keyWord.charCodeAt(count) - 97 - 26)
        } else {
          perem = (messageArr.charCodeAt(i) + keyWord.charCodeAt(count) - 97)
        }
        resArr[i] = String.fromCharCode(perem)
        count += 1
      } else {
        resArr[i] = messageArr.charAt(i)
      }

    }
    if (this.direct == false) resArr.reverse();
    return resArr.join('').toUpperCase()
  }
  
  decrypt(message, key) {
    if (
      typeof message != "string" ||
      typeof key != "string" ||
      message === false ||
      key === false
      ) {
        throw Error("Incorrect arguments!");
    }
    let messageArr = message.toLowerCase();
    key = key.toLowerCase()
    let keyWord = key;
    while (keyWord.length < message.length){
     keyWord = `${keyWord}${key}`
   }
   let resArr = [];
   let perem;
   let count = 0;
   for (let i = 0; i < messageArr.length; i++) {
     if (messageArr.charCodeAt(i) > 96 && messageArr.charCodeAt(i) < 123) {
       if((messageArr.charCodeAt(i) - keyWord.charCodeAt(count) + 97) < 97){
         perem = (messageArr.charCodeAt(i) - keyWord.charCodeAt(count) + 97 + 26)
       } else {
         perem = (messageArr.charCodeAt(i) - keyWord.charCodeAt(count) + 97)
       }
       resArr[i] = String.fromCharCode(perem)
       count += 1
     } else {
       resArr[i] = messageArr.charAt(i)
     }

   }
   if (this.direct == false) resArr.reverse();
   return resArr.join('').toUpperCase()
 }
}


module.exports = {
  VigenereCipheringMachine
};