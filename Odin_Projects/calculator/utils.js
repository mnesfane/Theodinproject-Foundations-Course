export const removeActiveIfExists = function(){
    const activeOp = document.querySelectorAll('.activeOperator')
    // REMOVE active buttons if exists
    activeOp.forEach(elem =>{
        elem.classList.remove('activeOperator');   
        elem.classList.add('operator');
    })
}