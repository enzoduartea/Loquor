// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
// até acerto    
  var guess = 1
  function submit()
  {
   var x  = document.getElementById("guessField").value;

   if(x==y)
   {
      alert("Parabéns!!!"+playername+", você acertou em "
        + guess + " tentativa(s)! ");
      guess = 1;
   }
    else if(x > y)
    {
      guess++;
      alert("Opa, reposta errada!! Tente um número menor");
    }
    else
    {
      guess++;
      alert("Opa, reposta errada!! Tente um número maior");

    }
  }

// função para o número enviado pelo usuário
function playAgain()
{
   y = Math.floor(Math.random() * 10 + 1);
}