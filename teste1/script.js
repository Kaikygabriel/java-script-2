let lista = document.getElementById('lista1')

let contagem = 0
const main = document.getElementById('main')
let bt = document.getElementById('enviar')
function enviar(){
    let n = lista.value
    if(n !=  ''  &&  n != null && n != undefined){
    ++contagem
       
    let lista1 = `<div id='${contagem}' class="divs" >${n}</div>`;

        main.innerHTML += lista1

    }else{
        alert('errado')
    }
    lista.focus(); 
     lista.value = ''  
}


lista.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        enviar()
    }
})