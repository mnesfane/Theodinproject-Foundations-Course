const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const clear = document.querySelector('#clear')
const eraser = document.querySelector('#eraser')
const color = document.querySelector('#color')
let inputColor = document.querySelector('.colorInput')
const RGBColor = document.querySelector('#rbg-color')
let range = document.querySelector('#range')
let rangeValue = range.value

const defaultColor = inputColor.value
const defaultMode = 'color'
const defaultSize = 150

let currentColor = defaultColor
let currentMode = defaultMode
let currentSize = defaultSize

let rangeSize = 75

let mouseup = true

// the range slide is fixed cuz of this line 
// document.body.onmousedown = () => (mouseup = false)
//  if i change it to addEventListener it solves the prob
// cuz doc.body.onmousedown overwrite every mousedown event to (onmousedown = () => (mouseup = false))
// so when i changed the range slider , mouseup was always set to flase
// i used addEventListener cuz it allows multiple event listeners for the same event without overwriting each other
document.body.addEventListener('mousedown', () => (mouseup = false));
document.body.onmouseup = () => (mouseup = true)


function clearFn(){
    currentMode = 'clear'
    let griddivs = document.querySelectorAll('.grid-box');
    griddivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
}

const emtyGrid = function(){
    let rows = document.querySelectorAll('.grid-row')
    rows.forEach(row => {
        row.remove();
    });
}

const changeRangeSize = function(newRangeValue){
    rangeValue = newRangeValue

    emtyGrid()
    createGrid(rangeValue)
}

const updateRangeValueHtml = function(newRangeValue){
    let rangeSizeText = document.querySelector('.showSizeDiv')
    rangeValue = newRangeValue
    
    if(rangeValue === '150')
        rangeSizeText.innerHTML = 'Paint Mode'
    else
        rangeSizeText.innerHTML = `${rangeValue} x ${rangeValue}`

}

color.onclick = () => {  currentColor = inputColor.value ;currentMode = 'color'; activeButton()}
inputColor.oninput = () => {currentColor = inputColor.value}
RGBColor.onclick = () => {currentMode = 'rgb'; activeButton()}
eraser.onclick = () => { currentMode = 'eraser' ; activeButton()}
clear.onclick = () => { clearFn() ; activeButton()}
range.onchange = (e) => {changeRangeSize(e.target.value)}
range.onmousemove = (e) => { updateRangeValueHtml(e.target.value)}

const mode = function (e){
        if (e.type === 'mouseover' && !mouseup){
            if(currentMode === 'rgb'){
                let red = Math.floor(Math.random() * 256)
                let gr = Math.floor(Math.random() * 256)
                let bl = Math.floor(Math.random() * 256)
                e.target.style.backgroundColor = `rgb(${red}, ${gr}, ${bl})`
            }
            else if(currentMode === 'color')
                e.target.style.backgroundColor = currentColor
            else if(currentMode === 'eraser'){
                e.target.style.backgroundColor = 'white'}
    }
}

const createGrid = (amtOfGrids) =>{
    const widthAndHeight = 480 / amtOfGrids
    for(let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')
        
        for(let j = 0; j < amtOfGrids; j++){
            const gridbox = document.createElement('div')
            gridbox.classList.add('grid-box')
            gridbox.style.width = `${widthAndHeight}px`
            gridbox.style.height = `${widthAndHeight}px`
            gridbox.addEventListener('mouseover', mode)
            gridbox.addEventListener('mouseup', mode)
            row.appendChild(gridbox)
        }
        container.appendChild(row)
    }
}

const activeButton = function(){
    activeButt = document.querySelector('.activeButt')
    if(activeButt){
        activeButt.classList.remove('activeButt')
    }
    if(currentMode === 'color'){
        color.classList.add('activeButt')}
    else if(currentMode === 'rgb'){
        RGBColor.classList.add('activeButt')
    }
    else if(currentMode === 'eraser'){
        eraser.classList.add('activeButt')
    }
    else if(currentMode === 'clear'){
        clear.classList.add('activeButt')
    }
}

window.onload = function (){
    createGrid(rangeValue)
    activeButton()
}