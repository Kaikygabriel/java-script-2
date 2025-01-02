

var md = document.getElementById('mudar')

const carro = { 
    marca : 'uno',
    ano : 2003,
    modelo :'corsa'}
// coverteu objeto em texto
    let txt = JSON.stringify(carro)
// mostrou no html
md.innerHTML = txt
// converteu texto em objeto
    let obj = JSON.parse(txt)
    // mostrou no terminal
    console.log(obj.modelo)