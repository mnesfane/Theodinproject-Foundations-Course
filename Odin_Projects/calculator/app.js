import * as handler from './handler.js'


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


const operators = [
    { element: document.querySelector('.operator.division'), handler: handler.handleDivision },
    { element: document.querySelector('.operator.multiplication'), handler: handler.handleMultiplication },
    { element: document.querySelector('.operator.mince'), handler: handler.handleMince },
    { element: document.querySelector('.operator.plus'), handler: handler.handlePlus },
    { element: document.querySelector('.operator.equal'), handler: handler.handleEqual }
]
// alert('off 1')

const calcFunctions = [
    { element: document.querySelector('.function.ac'), handler: handler.handleAC },
    { element: document.querySelector('.function.pm'), handler: handler.handlePlusMinus },
    { element: document.querySelector('.function.percentage'), handler: handler.handlePercentage }
]



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
    if( char !== '.' || !nbrStrFrom.includes('.'))
        nbrStrFrom = nbrStrFrom.length < 9 ? nbrStrFrom + char : nbrStrFrom
    display.textContent = nbrStrFrom
}
const updateNbr = function(){
    nbr = Number(nbrStrFrom)
    // alert(nbr)
}

buttons.forEach(button => {
    button.element.addEventListener('click', () => {
        displayChar(button.char);
        updateNbr()
    })
})

const removeActiveIfExists = function(element){
    const activeOp = document.querySelectorAll('.activeOperator')
    // REMOVE active buttons if exists
    activeOp.forEach(elem =>{
        elem.classList.remove('activeOperator');   
        elem.classList.add('operator');
    })
}

const changeButtonColor = function(element){
    element.classList.remove('operator');
    element.classList.add('activeOperator');
}

operators.forEach(op => {
    op.element.addEventListener('click', () =>{
        // i placed it exactly here cuz 1: to remove active butt if i pressed another and 2: if i pressed equal need to rem active butt too
        removeActiveIfExists()
        if(op.handler !==  handler.handleEqual)
            changeButtonColor(op.element)
    })
})
alert('1');
