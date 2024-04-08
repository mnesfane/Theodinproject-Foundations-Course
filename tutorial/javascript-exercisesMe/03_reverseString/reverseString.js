const reverseString = function(str) {
    let c = ''
    strArr = str.split('')
    let len = strArr.length
    for(let i = 0; i < Math.floor(len / 2) ; i++){
        c = strArr[i]
        strArr[i] = strArr[len - i - 1]
        strArr[len - i - 1] = c
   }
   return strArr.join('');
};
// console.log(reverseString(''))
// Do not edit below this line
module.exports = reverseString;
