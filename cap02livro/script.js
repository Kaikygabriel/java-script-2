const frm = document.querySelector('form')
const h3 = document.querySelector('h3')
let nome = document.getElementById('nome')

frm.addEventListener('submit', (e)=>{

    h3.innerText = `Olá ${nome.value}`
 
   e.preventDefault()
   nome.value = ''
   nome.focus()
})