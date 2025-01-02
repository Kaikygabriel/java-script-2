class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina(){
        return `${this.modelo} BIIIIIIIIIII`
    }
}

const uno = new Carro('fiat','uno',2003)
const corsa = new Carro('chefrole', 'corsa',2010)


console.log(uno.buzina())
console.log(corsa.buzina())


console.log(corsa)

corsa.ano = 2011

console.log(corsa)

// precisa ter a class antes de construir um objeto ex: uno ou corsa precisa ser depois da class 