const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const clear = document.querySelector('#clear')
const eraser = document.querySelector('#eraser')
const color = document.querySelector('#color')
let inputColor = document.querySelector('.colorInput')
const RGBColor = document.querySelector('#rbg-color')
let range = document.querySelector('#range')

const defaultColor = inputColor.value
const defaultMode = 'color'
const defaultSize = 200

let currentColor = defaultColor
let currentMode = defaultMode
let currentSize = defaultSize

let rangeSize = 75

let mouseup = true

// the range slide is fixed cuz of this line 
// document.body.onmousedown = () => (mouseup = false)
document.body.onmouseup = () => (mouseup = true)


function clearFn(){
    let griddivs = document.querySelectorAll('.grid-box');
    griddivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
}

const changeRangeSize = function(rangeValue){
    // alert('dlksm')
    let rangeSizeText = document.querySelector('.showSizeDiv')
    rangeSize = rangeValue
    rangeSizeText.innerHTML = `${rangeSize} x ${rangeSize}` 
}

color.onclick = () => { currentColor = inputColor.value ;currentMode = 'color'}
inputColor.oninput = () => (currentColor = inputColor.value)
RGBColor.onclick = () => (currentMode = 'rgb')
eraser.onclick = () => (currentMode = 'eraser')
clear.onclick = () => clearFn()
range.onchange = (e) => changeRangeSize(e.target.value)
range.onmousemove = (e) => changeRangeSize(e.target.value)

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


const main = function(){
    createGrid(16)
}

main()