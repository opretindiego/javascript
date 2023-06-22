let item = document.getElementById("item")

function Adicionar(){ 
    //Criar um elemento
    let p =  document.createElement("li");
    // Criar conteúdo
    let texto = document.createTextNode(item.value);
    //Adicionar um texto no elemento
    p.appendChild(texto)
    //Adiconar no Body
    document.getElementById("lista").appendChild (p)
}

