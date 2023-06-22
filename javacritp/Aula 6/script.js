let fruta = document.getElementById  ("Fruta");
let Resultado = document.getElementById("Resultado")
function Aperta()
{

switch(fruta.value)
        {
           case "Banana" :
                Resultado.innerHTML = "Você escolheu Banana"
                    break;
          case "Maçã" :    
           Resultado.innerHTML = "Você escolheu Maçã "
          break;
          default :
          Resultado.innerHTML ="Não existe no nosso sistema essa fruta"
          break

        }
}