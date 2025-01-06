const lista = ['arroz ','feijao ','tomate']
// criando um map,map e como fosse um for para ler um array, porem o map ao contrario do for não da pra para no meio, ele le tudo 
// coloco uma array funcition para funcionar o map
// map pode ter ate 2 parametros (elemento, i = indice do array)

// lista.map((elemento,i)=>{
//     console.log("lista" +i+ 'listados,:'+elemento)
// })
let c = lista.map((elemento,i)=>{
    
    return `<div>${elemento}</div>`
})
document.body.innerHTML += c