let  nbrStrFrom = ''
let nbr = 0

const buttons = [
    { element: document.querySelector('.zero'), char: '0' },
    { element: document.querySelector('.one'), char: '1' },
    { element: document.querySelector('.two'), char: '2' },
    { element: document.querySelector('.three'), char: '3' },
    { element: document.querySelector('.four'), char: '4' },
    { element: document.querySelector('.five'), char: '5' },
    { element: document.querySelector('.six'), char: '6' },
    { element: document.querySelector('.seven'), char: '7' },
    { element: document.querySelector('.eight'), char: '8' },
    { element: document.querySelector('.nine'), char: '9' },
    { element: document.querySelector('.decimal'), char: '.' }
];

// ---------- buttons query and addEventListener
const ac = document.querySelector('.function.ac')
const plusMince = document.querySelector('.function.pm')
const percentage = document.querySelector('.function.percentage')
const division = document.querySelector('.operator.division')
const multiplication = document.querySelector('.operator.multiplication')
const mince = document.querySelector('.operator.mince')
const plus = document.querySelector('.operator.plus')
const decimal = document.querySelector('.decimal')
const equal = document.querySelector('.operator.equal')



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

const displayChar = function(char){
    nbrStrFrom = nbrStrFrom.length < 9 && !nbrStrFrom.includes('.') ? nbrStrFrom + char : nbrStrFrom
    display.textContent = nbrStrFrom
}

buttons.forEach(button => {
    button.addEventListener('click', () => {displayChar(button.char)})
    alert('22')
})