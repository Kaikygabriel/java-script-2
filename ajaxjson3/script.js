let txt = document.getElementById('texto')
let pg = document.getElementById('pegar')

function ativo(callback){




const AJAX = new XMLHttpRequest()

AJAX.open('GET', ' https://viacep.com.br/ws/'+pg.value+'/json/')
AJAX.send();


AJAX.onload= function(){ 
    if(this.readyState == 4 && this.status==200)
  {  // peguei e transformei em objeto 
    let obj = JSON.parse(this.responseText)
    // peguei cada parametro 
    let rua = obj.logradouro
    let bairro = obj.bairro
    let estado = obj.estado
    let ddd = obj.ddd

    // coloquei no html
    txt.innerHTML = `seu bairro é <strong>${bairro}</strong> <br>, mora na rua <strong>${rua}</strong> <br>, do estado de <strong>${estado}</strong> e seu DDD é <strong>${ddd}</strong>.`}
  
}
}

function entrou(){
    pg.focus()
}
 


