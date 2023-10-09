const palindromes = function (str) {
    str = str.toLowerCase()
      let strArr = str.split('')
      while (strArr.includes('!')) {
        strArr.splice(strArr.indexOf('!'),1);
      }
      while (strArr.includes('.')) {
        strArr.splice(strArr.indexOf('.'),1);
      }
      while (strArr.includes(',')) {
        strArr.splice(strArr.indexOf(','),1);
      }
      while (strArr.includes(' ')) {
        strArr.splice(strArr.indexOf(' '),1);
      }
      str = strArr.join('')
      let reverse = str.split('').reverse().join('')
      return str === reverse ? true : false
    };

// Do not edit below this line
module.exports = palindromes;
