const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const clear = document.querySelector('#clear')

const sizeOfGrid = 16;

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
            gridbox.addEventListener('mouseenter', () =>{
                gridbox.style.backgroundColor = 'blue'
            })
            row.appendChild(gridbox)
        }
        container.appendChild(row)
    }
}

clear.addEventListener('click', function() {
    let griddivs = document.querySelectorAll('.grid-box');
    griddivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
});


const main = function(){
    createGrid(sizeOfGrid)
}

main()