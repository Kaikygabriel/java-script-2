function aluno(nome,idade){
    this.nome = nome   
    this.idade = idade
// this ta fazendo uma distinção 
// ele sempre faz referencia a função 
   this.dados = function(){
    setTimeout(function(){
        console.log(nome)
        console.log(idade)
    },1000)
   }
}

const al = new aluno('kaiky',16)
al.dados( )