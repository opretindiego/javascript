let titulo = document.getElementById(`titulo`)
titulo.style.textAlign = `center`;
titulo.style.backgroundColor = `#CCC`;
titulo.style.borderBottom = `solid 3px #000`;
titulo.style.margin = `20px`;

titulo.innerHTML = `Olá meu querido alunos S2`;


//chama todas class de uma vez!
let itens = document.getElementsByClassName('item');
console.log(itens);
itens[1].innerHTML = 'Olá'
itens[1].style.backgroundColor = 'yellow'