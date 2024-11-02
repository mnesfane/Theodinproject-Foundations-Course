let  nbrStrFrom = ''
let nbr = 0

// ---------- buttons query and addEventListener
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

nine.addEventListener('click', () =>{ nbrStrFrom += '9'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
eight.addEventListener('click', () =>{ nbrStrFrom += '8'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
seven.addEventListener('click', () =>{ nbrStrFrom += '7'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
six.addEventListener('click', () =>{ nbrStrFrom += '6'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
five.addEventListener('click', () =>{ nbrStrFrom += '5'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
four.addEventListener('click', () =>{ nbrStrFrom += '4'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
three.addEventListener('click', () =>{ nbrStrFrom += '3'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
two.addEventListener('click', () =>{ nbrStrFrom += '2'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
one.addEventListener('click', () =>{ nbrStrFrom += '1'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
zero.addEventListener('click', () =>{ nbrStrFrom += '0'; display.textContent = nbrStrFrom }) //;alert(nbrStrFrom)
decimal.addEventListener('click', () =>{ nbrStrFrom += '.'; display.textContent = nbrStrFrom }) // alert(nbrStrFrom)

// ------------ clock query
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')

const updateTime = function (){
    let now = new Date();

    // hour.textContent = now.getHours() >= 10 ? `${now.getHours()}` : '0' + `${now.getHours()}`
    // minute.textContent = now.getMinutes() >= 10 ? `${now.getMinutes()}` : '0' + `${now.getMinutes()}`
    // or use padStart(2, '0')
    hour.textContent = now.getHours().toString().padStart(2, '0')
    minute.textContent = now.getMinutes().toString().padStart(2, '0')
}
updateTime()
setInterval(updateTime, 1000)

// -------------- display tipped number

let display = document.querySelector('.display')