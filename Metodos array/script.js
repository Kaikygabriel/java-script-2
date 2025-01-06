const funcionario = [
    {nome: 'kaiky', idade :16, salario : 2000, ativo : true},
    {nome: 'jadson', idade :20, salario : 3000, ativo : true},
    {nome: 'erick', idade :24, salario : 4000, ativo : false},
    {nome: 'mano', idade :11, salario : 1000, ativo : true}
]
// exemplo de array, com objeto 


// find 
// ele percore a lista, podese passar uma condição para ele, e quando ele achar essa condição, ele vai pegar o objeto que tem a condição e vai entregar para mim
// dentro dessa função anonima ternho acesso a cada objeto que ta sendo passado
// dentro da propiedade item teremos acesso a todos os objetos do array funcionario 
// const user = funcionario.find((item)=>{
//     return item.idade >= 20
// })
// // com base na condição que eu passei ele devolve o primeiro item que encontrar 
// console.log(user)





// const user = funcionario.filter((item)=>{
//     return item.salario >= 3000 && item.ativo;
// })
// // ele pega todos os item que atende as condições
// console.log(user)


// pra voce encontrar a posição de um item dentro do array 
// ele retorna a posição do item que atender os requisitos 
// const indexuser = funcionario.findIndex((item)=>{
// return item.nome == 'kaiky'
// })
// console.log(indexuser)
// console.log(funcionario[indexuser].salario = 1000)
// // ex do que posso fazer 
// console.log(funcionario)


// ele percore o array 
// da pra fazer muita coisa em volta do map 
// index ea posição de cada item no arrau
// const user = funcionario.map((item, index) =>{
//     return 'Olá '+ item.nome +',voce tem ' +item.idade+ ' anos, e seu salario é '+item.salario
// })
// console.log(user)



// ele inverte a ordem do array
// console.log(funcionario.reverse())




// Some
// ele percore a lista e verifica se algo condiz com a condição, ele so retorna valor boleano(true, false)
// const usersome = funcionario.some((item)=>{
// return item.ativo == false
// })

// console.log(usersome)


// parecido com o some porem ele so retorna verdadeiro se todos os item atender a condição 
// const usereve = funcionario.every((item)=>{
//     return item.ativo == true
// })

// console.log(usereve)