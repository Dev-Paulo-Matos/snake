let canva = document.querySelector('#snake');
let context = canva.getContext("2d");
let box = 32;

//TAMANHO DA TELA DEPENDENDO DO APARELHO

function bg() {
    context.fillStyle = 'lightgreen'
    context.fillRect(0,0, 657, 650)
}
bg()
