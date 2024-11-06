import * as utils from './utils.js'

let nbrStrFrom = ''
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
    { element: document.querySelector('.operator.division'), handler: handleDivision },
    { element: document.querySelector('.operator.multiplication'), handler: handleMultiplication },
    { element: document.querySelector('.operator.mince'), handler: handleMince },
    { element: document.querySelector('.operator.plus'), handler: handlePlus },
    { element: document.querySelector('.operator.equal'), handler: handleEqual }
]

const calcFunctions = [
    { element: document.querySelector('.function.ac'), handler: handleAC },
    { element: document.querySelector('.function.pm'), handler: handlePlusMinus },
    { element: document.querySelector('.function.percentage'), handler: handlePercentage }
]



// import * as handler from './handler.js'
function handleDivision() {
    // logic for division
};

function handleMultiplication() {
    // logic for multiplication
};

function handleMince() {
    // logic for mince
};

function handlePlus() {
    // logic for plus
};

function handleEqual() {
    // logic for equal
};
// ------------- handleAC functions


function handleAC(func) {
    utils.removeActiveIfExists()
    if(nbr !== 0){
        nbr = 0
        nbTostr()
        // alert(nbrStrFrom)
        display.textContent = nbrStrFrom
        calcFunctions[0].element.textContent = "AC"
    }
};

function handlePlusMinus() {
    nbr *= -1
    alert(nbr)
    nbTostr()
};

function handlePercentage() {
    // logic for equal
};

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

const displayNbrStr = function(char){
    if( char !== '.' || !nbrStrFrom.includes('.'))
        // after i press c(clear) nbrStr == '0' if i press a numb it becames '09' so i need to slice the first 0 
        if(nbrStrFrom[0] === '0'){
            nbrStrFrom = nbrStrFrom.slice(1)    }
        nbrStrFrom = nbrStrFrom.length < 9 ? nbrStrFrom + char : nbrStrFrom
    display.textContent = nbrStrFrom
}

const AcToC = function(){
    if(nbr !== 0){
    calcFunctions[0].element.textContent = "C"}
}

function nbTostr(){
    nbrStrFrom = nbr.toString()
}
const updateNbr = function(){
    nbr = Number(nbrStrFrom)
    AcToC() 
}

buttons.forEach(button => {
    button.element.addEventListener('click', () => {
        displayNbrStr(button.char);
        updateNbr()
    })
})

const changeButtonColor = function(element){
    element.classList.remove('operator');
    element.classList.add('activeOperator');
}
// operators loop and ev list
operators.forEach(op => {
    op.element.addEventListener('click', () =>{
        // i placed it exactly here cuz 1: to remove active butt if i pressed another and 2: if i pressed equal need to rem active butt too
        utils.removeActiveIfExists()
        if(op.handler !== handleEqual)
            changeButtonColor(op.element)
    })
})

// calcFunctiocns loop and ev list
calcFunctions.forEach(func => {
    func.element.addEventListener('click', () =>{
        // alert('off')
        func.handler(func)
    })
})
alert('1');
