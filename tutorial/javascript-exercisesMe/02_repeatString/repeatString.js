const repeatString = function(str, numberOfRepeats) {
    if (numberOfRepeats < 0)
        return 'ERROR';
    let newStr = ''
    for (let i=0; i < numberOfRepeats; i++){
        newStr += str
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
