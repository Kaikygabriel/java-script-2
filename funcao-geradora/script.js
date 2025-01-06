// Colocando um asteristico(*) na função ela vira uma função geradora


// function* cor(){
//     yield 'Amarelo'
//     yield 'azuul'
//     yield 'vermelho'
// }

// const fun = cor()

// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)




// function* sport(){
//     const nome = yield'qual seu nome'
//     const sports = yield'qual seu sport favorito'
//     return `seu nome é ${nome}, e seu sport favorito é ${sports}`
// }


// const itc = sport()

// console.log(itc.next().value)
// console.log(itc.next('kaiky').value)
// console.log(itc.next('futbol').value)


function* contador(){
   const i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }     
    }
}
const itc = contador()
 
for(let c; c <= i.lenght ; c++){
    console.log(itc.next().value)
}