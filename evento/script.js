function clicou(){
 alert('Evento click acionado')
}
// clicou 

function clickduplo(){
    alert('clicou duas vezes sobre o botão')
}
//  duplo click
function sobre(){
    alert('mouse esta sobre o button')
}
// mouse esta sobre o button
var mudar = document.getElementById('muda')

function entrou(){
    mudar.style.backgroundColor ='yellow'
}
// mouse entrou na div
function sair(){
 mudar.style.backgroundColor = 'blue'
}
// mouse sai da div
// function movendo(){
//  let txt = document.createTextNode('movendo o mouse na div')
//  mudar.appendChild(txt)
// }

var input = document.getElementById('input1')

function focou(){
    input.value = ''
}

function mudou(){
    console.log('o elemento mudou')
}

// função de tecla
function teclapressionada(){
    console.log(input.value)
}