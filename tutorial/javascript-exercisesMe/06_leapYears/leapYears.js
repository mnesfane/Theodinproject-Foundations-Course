const leapYears = function(year) {
    // if (year % 400 == 0)
    //     return true
    // else if (year % 4 == 0 && year % 100 != 0 )
    //     return true
    // return false
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
};
// console.log(leapYears(1800))
// Do not edit below this line
module.exports = leapYears;
