
const txt1 = document.querySelector('#tempo')

function contar(){
   
    txt1.innerHTML = 'Começou a contar'
    // ativa a função apenas uma vez quando der o tempo especificado
    // precisa colocar em uma variavel global(ou seja sem var ou let ou const) para poder pegar o settimeout e parar
   tempo = setTimeout(function(){
        txt1.innerHTML = 'Executou a função'
    },5000)
}
function PararContagem(){
    clearTimeout(tempo)
    txt1.innerHTML = 'Parou a contagem'
    setTimeout(function(){
        txt1.innerHTML = '0'
    } , 2000)
} 
setTimeout(function(){},5000)