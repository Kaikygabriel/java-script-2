const num = document.getElementById('valor')
const tm = document.getElementById('numero')


function comecar(){
 

    var n = Number(num.value)
    tm.innerHTML = n
   
    function Innome(e){
        if(e.lenght != 0 && Number(e.value) >= 1 ){
            return true
        }else{
            return false
        }
    }
    if(Innome(num)){

    tempo = setInterval(function(){

       var contagem = Number(tm.innerHTML)
        var soma = contagem - 1 
        tm.innerHTML = soma

        if(Number(tm.innerHTML) == 0){
            parar()
        }

    },1000)

   

} else{
    alert('ERROR')
}
}

function parar(){
    clearInterval(tempo)
     tm.innerHTML = 'Acabou a contagem'
     setTimeout(function(){
        tm.innerHTML = 0
     },2500)

     num.focus()
}

function reiniciar(){
    window.location.reload()
    num.focus()
}

function entrou(){
    num.focus()
}
  







// setInterval(function(){
//     var n = Number(tm.innerHTML)
//     soma = n - 1
//     tm.innerHTML = soma
// },1000)