const isNumber = function(arg){
    return typeof arg === 'number';
};

const sumAll = function(startNumb, lastNum) {
    let s = 0
    if (startNumb < 0 || lastNum < 0 || !isNumber(startNumb) || !isNumber(lastNum)){
        return "ERROR"
    }
    if(startNumb > lastNum){
        let n = startNumb
        startNumb = lastNum
        lastNum = n
    }
    for (; startNumb <= lastNum; startNumb++){
        s += startNumb
    }
    return s
};
// console.log(sumAll(10, "90"))

// Do not edit below this line
module.exports = sumAll;
