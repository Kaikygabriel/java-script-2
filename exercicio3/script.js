function foi(){

    const txtp = document.getElementById('placa')
    const txt = document.getElementById('texto')



    const ajax = new XMLHttpRequest
    ajax.open('GET',' https://buscaplacas.com.br/resultado.php?ref=nwgpa1&placa='+String(txtp.value) +'&t=01b5eabfea177210b444e1483d7eb76d') 
    ajax.send();
    ajax.onload = function(){
        
        if(this.readyState == 4 && this.status == 200)
             {  
              let obj = JSON.parse(this.responseText)
              let marca = obj.marca
              let modelo = obj.modelo
              let ano = obj.ano
            
            txt.innerHTML = `marca do carro é ${obj.marca}`
            }
            
          
    }
}
// AFD4212 placa teste 
