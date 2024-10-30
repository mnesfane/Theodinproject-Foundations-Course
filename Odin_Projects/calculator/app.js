// ---------- buttons query
const ac = document.querySelector('.function.ac')
const plusMince = document.querySelector('.function.pm')
const percentage = document.querySelector('.function.percentage')
const division = document.querySelector('.operator.division')
const nine = document.querySelector('.nb-9')
const eight = document.querySelector('.nb-8')
const seven = document.querySelector('.nb-7')
const six = document.querySelector('.nb-6')
const five = document.querySelector('.nb-5')
const four = document.querySelector('.nb-4')
const three = document.querySelector('.nb-3')
const two = document.querySelector('.nb-2')
const one = document.querySelector('.nb-1')
const zero = document.querySelector('.nb-0')
const multiplication = document.querySelector('.operator.multiplication')
const mince = document.querySelector('.operator.mince')
const plus = document.querySelector('.operator.plus')
const decimal = document.querySelector('.decimal')
const equal = document.querySelector('.operator.equal')
// ------------ clock query
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
// console.log(nowHr.getHours())

const updateTime = function (){
    let now = new Date();
    hour.textContent = `${now.getHours()}`
    minute.textContent = `${now.getMinutes()}`
}
setInterval(updateTime, 1000)

// -------------- display tiped number