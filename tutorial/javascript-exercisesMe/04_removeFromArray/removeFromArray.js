const removeFromArray = function(numArr, ...args) {
    let newArray = [];
    for(numA of numArr){
        if (!args.includes(numA))
            newArray.push(numA)
        // for(let i = 0; i < numArr; i++){

        // }
    }
    return newArray;
};
// console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
