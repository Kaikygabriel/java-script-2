const carro = {
    marca :'ford',
     ano:'2000',
     completo: function(){
        return `a marca é ${this.marca} eo ano é ${this.ano}`
     }
}
console.log(carro.completo())