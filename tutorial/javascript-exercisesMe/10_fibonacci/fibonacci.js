const fibonacci = function(n) {
    if (n < 2){
        return n;
    }
    fibonacci(n - 1) + fibonacci(n - 2)
};

// Do not edit below this line
// module.exports = fibonacci;