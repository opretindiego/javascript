let valor = document.getElementById ("valor");
let tempo = document.getElementById ("tempo");


function Aperta()
{
    if(valor.value >= 3000 && tempo.value >= 5)
    {
        alert("podera votar")
    }
    else   
    {
       alert("Não podera votar")
    }
}