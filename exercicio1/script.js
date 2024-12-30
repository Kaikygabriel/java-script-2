const nome = document.getElementById('add')
const se1 = document.getElementById('selec')
var op = document.createElement('option')
const lista = []

function enviar(){

  function Innome(e){
    if(e > 1 && e < 100){
        return true
    } else{
        return false
    }
  }

  function Inrepet(e,a){
    if(a.indexOf(Number(e)) != -1){
        return true
    } else {
        return false 
    }
  }
 if(Innome(nome.value) && !Inrepet(nome.value , lista)){
   
    lista.push(Number(nome.value))

    var txt = document.createTextNode(`${nome.value} foi adicionado`)
    // op.innerHTML += `${nome.value} foi adicionado <br>`
    op.appendChild(txt)
    se1.appendChild(op)
   
    nome.focus()
    
    nome.value = ''

  }else{
    alert('ERROR')
 }


}

function remove(){
  lista.pop(Number(nome.value))
 op.remove()
 txt = 'removido'
 op.appendChild(txt)
}