
// function tabuada(){
//     var num = parseInt(document.getElementById("num").value);
//     var resposta = document.getElementById('resposta');
//     var tabuada='';
  
//     for(var count=1; count<=10 ; count++)
//      tabuada += num+" x "+count+" = "+num*count+"<br />";
    
//     resposta.innerHTML = tabuada;
//   }


//enquanto a condição for verdadeira faça algo
function tabuada(){

  let contador = 0
  let n1 = document.getElementById("n1").value
  document.getElementById("resposta").innerHTML = " "
  while (contador <= 10){
 document.getElementById("resposta").innerHTML += + "x" +
      contador + "=" + contador*n1 + "<br>"
      contador = contador + 1
  }

console.log("Terminou")
 }
