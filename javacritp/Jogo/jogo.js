let NomeDoJogador;
let Resposta;

NomeDoJogador = document.getElementById("nomedoJogaor")
Resposta = document.getElementById("reposta")

function EnviarNome(){
    if(NomeDoJogador.value ==""){
        alert("Insira um nome pf")
    }
    else{
    Resposta.innerHTML = "ola " +  NomeDoJogador.value + ". Vamos jogar !!!"
    }
}

