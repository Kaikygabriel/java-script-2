             
const teste = ['kaiky', 0 , 1, 'gabriel']
const teste2 =['arroz', 'feijão']
const teste3 = ['papa']
console.log(teste.indexOf(22))
// ver posição (indice) de um numero do array

teste.pop()
// tira o ultimo item da lista 

teste.push('gabriel')
// adiciona ao final da array um item 

teste.shift()
// remove o primeiro item da array

delete teste[0]
// ele remove um item, porem aquela posição fica como underfined

teste.unshift('kaiky')
// adiciona ao final da array um item 

teste.splice(1,0, 'alves', 16)
// a primeira informa qual posição o item vai ser adicionado, a segunda quantos item vão ser removido, ea ultima os item que vao ser adicionados

const super1 = teste.concat(teste2, teste3)
// cria uma outro array depois junta os outros dois array (concatena eles atraves da função concat)
// tem que ser criado um novo array se nnão, não funciona

// teste.sort()
// deixa em ordem alfabetica ou em ordem numerica


console.log(super1)

console.log(teste.join(' - '))
// troca as virgulas por algo que for colocado