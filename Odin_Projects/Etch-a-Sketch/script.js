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

let mouseup = true

document.body.onmousedown = () => (mouseup = false)
document.body.onmouseup = () => (mouseup = true)



const setColors = function(color){
    // let griddivs = document.querySelectorAll('.grid-box');

    // for (let div of griddivs){
    //     div.addEventListener('mouseover', function(){
    //         mode(color)
    //     })
    //     div.addEventListener('mouseup', mode
    // }
    currentColor = inputColor.value
}

function clearFn(){
    let griddivs = document.querySelectorAll('.grid-box');
    griddivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
}


function eraserFn(){
    // alert('aka')
    let griddivs = document.querySelectorAll('.grid-box');
    for (let div of griddivs){
        div.addEventListener('mouseenter' , function (){
            div.style.backgroundColor = 'white'
        })
    }
}

color.onclick = () => { currentColor = inputColor.value ;currentMode = 'color'}
inputColor.oninput = () => (currentColor = inputColor.value)
RGBColor.onclick = () => (currentMode = 'rgb')
eraser.onclick = () => (currentMode = 'eraser')
clear.onclick = () => clearFn()
range.onmousemove = updateRangeSize()
range.onchange = changeChangeSize()
// sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
// sizeSlider.onchange = (e) => changeSize(e.target.value)







const createGrid = (amtOfGrids) =>{
    const widthAndHeight = 480 / amtOfGrids
    // alert('griddivs.length')
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
const mode = function (e){
    // alert('griddivs.length')
    if (e.type === 'mouseover' && !mouseup){
        if(currentMode === 'rgb'){
            // alert(currentColor)
            let red = Math.floor(Math.random() * 256)
            let gr = Math.floor(Math.random() * 256)
            let bl = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${red}, ${gr}, ${bl})`
        }
        else if(currentMode === 'color')
            e.target.style.backgroundColor = currentColor
        else if(currentMode === 'eraser'){
            e.target.style.backgroundColor = 'white'
        }
    }
}



const main = function(){
    createGrid(200)
}

main()