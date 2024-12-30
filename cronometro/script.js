const tm = document.getElementById('tempo')

function contar(){
    

    tempo = setInterval(function(){
        var contagem = Number(tm.innerHTML)
        var soma = contagem + 1
        tm.innerHTML = soma

    
    }, 1000)

    // caso chegue em 100 ira parar 

}

function PararContagem(){

    clearInterval(tempo)
}

function reiniciar(){
    tm.innerHTML = '0'
}
