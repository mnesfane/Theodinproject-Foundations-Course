const palindromes = function (str) {
    str = str.toLowerCase()
    let len = str.length - 1;
    for (let i = 0; i <= len; i++){
        if (str[i] !== str[len]){
        return false}
        len--;
    }
    return true
};

// console.log(palindromes('tacos'))

// Do not edit below this line
module.exports = palindromes;