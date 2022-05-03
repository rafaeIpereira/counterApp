const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');


// evento para acrescentar, resetar e tirar um número.
buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor(); 
    }    
    if (e.target.classList.contains('subtrair')) {
        count.innerHTML--;
        setColor(); 
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColor(); 
    }
});

// Função para mudar de cor ao acrecentar, resetar e tirar um número. 
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'yellow'    
    } else if (count.innerHTML < 0) {
        count.style.color = 'orangered'
    } else {
        count.style.color = 'white'
    }
}

// OUTRA FORMA DE FAZERMOS A ADIÇÃO, SUBTRAÇÃO E RESET

// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtrair');

// add.addEventListener('click', () => {
//     count.innerHTML++;
// });

// sub.addEventListener('click', () => {
//     count.innerHTML--;
// });

// resetCount.addEventListener('click', () => {
//     count.innerHTML = 0;
// });