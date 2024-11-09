// import * as app from './app.js'

// export function activeOp(){
//     return app.operators.find((op)=>{
//         if(op.element.classList.contains('activeOperator'))
//                 return op
//     })
// }

export const removeActiveIfExists = function(){
    const activeOp = document.querySelectorAll('.activeOperator')
    // REMOVE active buttons if exists
    activeOp.forEach(elem =>{
        elem.classList.remove('activeOperator');   
        elem.classList.add('operator');
    })
}