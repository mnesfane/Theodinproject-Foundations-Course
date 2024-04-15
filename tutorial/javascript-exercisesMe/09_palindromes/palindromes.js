// version1
const isAlphanumeric = function(char){
    return /[a-zA-Z0-9]/.test(char)
}

const palindromes = function (text) {
    text = text.toLowerCase();
    let onlyAlphaNumText = "";
    for(let i = 0; i < text.length; i++){
        if (isAlphanumeric(text[i]))
        onlyAlphaNumText += text[i]
    }
    let bool = true
    let j = 0
    let len = onlyAlphaNumText.length - 1
    while(j < len){
        if (onlyAlphaNumText[j] != onlyAlphaNumText[len - j])
            bool = false
        j++
    }
    return bool
};

// version2
const palindromes2 = function (text) {
    let AlphaNumStr = text.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    return AlphaNumStr === AlphaNumStr.split('').reverse().join('')
}

// console.log(palindromes2("tacos"))

// Do not edit below this line
module.exports = palindromes;
