var P1 =  document.getElementById("P1");
var P2 = document.getElementById("P2");
var P3 = document.getElementById("P3");
var P4 = document.getElementById("P4");
var Resultado = document.getElementById("Resultado")
var multiplicar;

function multiplicar()
{
    P1.value;
    P2.value;
    P3.value;
    P4.value;
    multiplicar= parseInt(P1.value)+ parseInt(P2.value)+parseInt(P3.value)+parseInt(P4.value)
    Resultado.innerHTML = multiplicar
}