// indice
let contador = 0
let input = document.getElementById('tarefa')
let delet = document.getElementById('delete')
let main = document.getElementById('area')


function addTarefa(){
    let inp = input.value 
   if(inp != '' && inp != null && inp != undefined){
    // vai aumentar um no indice cada vez que for feito
    ++contador
   let novoitem = ` 
     <div id='${contador}' class="item">
            <div onclick = 'marcado(${contador})' id="item-icone">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" onclick = 'marcado(${contador}'></svg>
            </div>
            <div  id="item-nome" >${inp}</div>
            <div  id="item-botao">
                <button id="delete" onclick = 'deletar(${contador})'>Deletar <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" class="del"></svg></button>
         </div>
        </div>
   ` 
   main.innerHTML += novoitem
   
   }else{
   alert('ERROR')
   }

 input.value = ''
 input.focus()
}

// keyup siginifica que a tecla foi clicada
input.addEventListener('keyup', function(event){
// se clicou o enter 
    if(event.key === 'Enter'){
        
       
        event.preventDefault()
 // chama a função
        addTarefa()   
    }
})

function deletar(n){
    let tarefa = document.getElementById(n)
    tarefa.remove()
}

function marcado(a){
    
    let tarefa2 = document.getElementById(a)
    var classe = tarefa2.getAttribute('class')
    if(classe == 'item'){
        tarefa2.classList.add('clicado')
    } else{
        tarefa2.classList.remove('clicado')
    }

}

function carregou(){
    input.focus()
}