// AJAX
// https://viacep.com.br/ws/01001000/json/

// fazer solicitação para o site para pegar o texto dele 


// metodo para fazer uma requisição sem precisar acessar o site pelo navegador, pedindo pra acessar as informções do site de forma remota

const AJAX = new XMLHttpRequest()
// GET serve para pegar as informaçoes
AJAX.open('GET', 'https://viacep.com.br/ws/08772620/json/')
// para enviar a solicitação 
AJAX.send()
// quando abrir o site 
AJAX.onload = function(){
//    vai receber a resposta que vai vim 
document.getElementById('mudar').innerHTML = this.responseText
// transformar o texto que vai vim em objeto
var obj = JSON.parse(this.responseText)
alert(obj.ddd)

}