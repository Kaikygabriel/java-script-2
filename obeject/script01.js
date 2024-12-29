const carro = {
    marca :'ford',
    placa:{
      validade:2000,
      numero:2008,
    },
     ano:'2000',
     completo: function(){
        return `a marca é ${this.marca} eo ano é ${this.ano}`
     }
}
console.log(carro.completo())
console.log(carro.placa.numero)