const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const clear = document.querySelector('#clear')
const eraser = document.querySelector('#eraser')
// const color = document.querySelector('#color')
// const RGBColor = document.querySelector('#rbg-color')

// onclick.color

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
            row.appendChild(gridbox)
        }
        container.appendChild(row)
    }
}
const mode = function (e){
    // if (e.type === 'mouseover' && !mouseDown){
        e.target.style.backgroundColor = 'blue'
    // }
}

clear.addEventListener('click', function() {
    let griddivs = document.querySelectorAll('.grid-box');
    griddivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
});

eraser.addEventListener('click', () => {
    let griddivs = document.querySelectorAll('.grid-box');
    // alert(griddivs.length)
    for (let div of griddivs){
        div.addEventListener('mouseenter' , function (){
            div.style.backgroundColor = 'white'
        })
    }
})


const main = function(){
    createGrid(16)
}

main()