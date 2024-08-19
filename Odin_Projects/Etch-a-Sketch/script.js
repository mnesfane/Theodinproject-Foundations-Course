// let squareLenght = 30
// let squareCount = 16
// let cube = document.querySelector('.cube')
// // nbOfdivs = 16

// const divGrid = (nbOfdivs) =>{
//     // alert(nbOfdivs);
//     for(let i = 0; i < nbOfdivs - 1; i++){
//         const row = document.createElement('div')
//         row.classList.add('row')
//         for(let j = 0; j < nbOfdivs - 1; j++){
//             const divsInRow = document.createElement('div')
//             divsInRow.classList.add('divsInRow')
//             row.appendChild(divsInRow)
//         }
//         cube.appendChild(row)
//     }
// }

// let main = function (){
//     // let cube = document.querySelector('.cube')
//     // cube.style.height = `${squareCount * squareLenght}px`;
//     // cube.style.width = `${squareCount * squareLenght}px`;
//     divGrid(32)
//     // alert('fdai')

// }

// main()



const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
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

createGrid(sizeOfGrid)