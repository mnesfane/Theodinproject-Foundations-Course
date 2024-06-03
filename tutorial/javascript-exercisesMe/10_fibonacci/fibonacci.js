let n = 8
// memoization
// let fibonacciCache = new Array(n + 1)
function  fibonacci(n){
    if(n < 0)
        console.log("OOPS")
    if(n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
};

// console.log(fibonacci(8))
// Do not edit below this line
// module.exports = fibonacci;
