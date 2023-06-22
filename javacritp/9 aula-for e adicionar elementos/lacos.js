let x = document.getElementById("valorInicial");
let y = document.getElementById("valorFinal")


function aperte(){
    while (x.value <= parseInt(y.value))
    // criar elementp p
    let paragrafo = document.createElement(p)
    console.log(x)
    //criado um texto
    let texto = document.createTextNode(x.value)
    //Adicionar um texto no seu elemento
    paragrafo.appendChild(texto);
    document.getElementById("contar").appendChild(paragrafo)
    console.log(x.value)
    x.value++ // x = x + 1
}
