function sumOfTripledEvens(arr){
    let oddArr = arr.filter(function(n){ 
        return n % 2 === 0 })
    let arr3 = oddArr.map(n => n * 3)
    let sum = arr3.reduce((total, n) => total + n, 0)
    console.log(sum)
}

sumOfTripledEvens([1, 2, 3, 4, 5, 6])