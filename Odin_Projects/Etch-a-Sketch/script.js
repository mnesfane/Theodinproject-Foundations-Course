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

const currentColor = defaultColor
const currentMode = defaultMode
const currentSize = defaultSize




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

function eraser(){
    let griddivs = document.querySelectorAll('.grid-box');
    griddivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
}


function clear(){
    alert('aka')
    let griddivs = document.querySelectorAll('.grid-box');
    for (let div of griddivs){
        div.addEventListener('mouseenter' , function (){
            div.style.backgroundColor = 'white'
        })
    }
}

color.onclick = () => { currentColor = inputColor.value ;currentMode = 'color'}
inputColor.onclick = () => (currentColor = inputColor.value)
RGBColor.onclick = () => (currentMode = 'rainbow')
eraser.onclick = () => eraser()
clear.onclick = () => clear()
range.onchange = 




// colorPicker.oninput = (e) => setCurrentColor(e.target.value)
// colorBtn.onclick = () => setCurrentMode('color')
// rainbowBtn.onclick = () => setCurrentMode('rainbow')
// eraserBtn.onclick = () => setCurrentMode('eraser')
// clearBtn.onclick = () => reloadGrid()
// sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
// sizeSlider.onchange = (e) => changeSize(e.target.value)


// onclick.color
let mouseup = true

document.body.onmousedown = () => (mouseup = false)
document.body.onmouseup = () => (mouseup = true)





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
    if (e.type === 'mouseover' && !mouseup){
        e.target.style.backgroundColor = color
    }
}



const main = function(){
    createGrid(200)
}

main()