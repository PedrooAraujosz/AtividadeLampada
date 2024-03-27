let led = "ligar"

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
imgLampada.src = "./img/acesa.jpg";
imgLampada.alt = "lampada acessa."
document.getElementsByTagName ("footer")[0].style.background = "#e30613"
btnEnviar.innerHTML = "apagar"
    led = "apagar"
  } else {
      // lampada.innerHTML = <img id="lampada" src="img/apagada.jpg" alt="Lâmpada" />;
      imgLampada.src = "./img/apagada.jpg";
      imgLampada.alt = "lampada acessa."

      btnEnviar.innerHTML = "acesa";
      led = "ligar"
  }
};

const gerarImagem=() => {
  let qtdImagem = document.getElementById
  ("inQtdImg").value;//valor informado pelo usuario

  console.log(qtdImagem);
let Canvas =document.getElementById("canvas");
Canvas.innerHTML=""
for (let i = 1; i <= qtdImagem; i++) {
  Canvas.innerHTML += `<img class="imagens" src="img/acesa.jpg" alt="imagem">`};
  
    
  };


const calcular = () => {

  let valorPedido = document.getElementById("inValorPedido").value 
  let percDesc = 0;
  let valorDesconto = 0;
  let valorFinal = 0;

  if(valorPedido >= 2000){
    percDesc = 1.5;
    // valorDesconto = valorPedido * (percDesc /100);
    // valorFinal = valorPedido - valorDesconto;
  }
  else if(valorPedido >= 1500){
    percDesc = 1.0;
    // valorDesconto = valorPedido * (percDesc /100);
    // valorFinal = valorPedido - valorDesconto;
  }
  else if(valorPedido >= 1000){
    percDesc = 0.8;
    // valorDesconto = valorPedido * (percDesc /100);
    // valorFinal = valorPedido - valorDesconto;
  }
  else if(valorPedido >= 500){
    percDesc = 0.5;
    // valorDesconto = valorPedido * (percDesc /100);
    // valorFinal = valorPedido - valorDesconto;
  }

  valorDesconto = valorPedido * (percDesc /100);
  valorFinal = valorPedido - valorDesconto;

  document.getElementById("inPercDesc").value = percDesc
  document.getElementById("inValDesc").value = valorDesconto
  document.getElementById("inValFinal").value = valorFinal
};

function validaForm(){ 
 const inData = document.getElementById("inData").value 
 const inCli = document.getElementById("inCli").value 
 const inFone =  document.getElementById("inFone").value 
 const inMail = document.getElementById("inMail").value 
 const inProd = document.getElementById("inProd").value 
 const inQtd = document.getElementById("inQtd").value 
 const inVal = document.getElementById("inVal").value 
 const mensageError = document.getElementById("mensagem-erro") 
 

  mensageError.style.display = "none";
  mensageError.innerHTML = "";

  console.log(inCli.length)

  if (inCli.length <= 3) { 
    mensageError.innerHTML += "O Campo Cliente deve ter no minimo 3 caracteres<br />";
  }

  if (inMail.length <= 5) { 
    mensageError.innerHTML += "O Campo E-mail deve ter no minimo 5 caracteres<br />";
  }

  if (inQtd.length < 0) { 
    mensageError.innerHTML += "O Campo Quantidade Não pode ser negativo<br />";
  }
  if (!inVal.length ) { 
  mensageError.innerHTML += "O Campo Quantidade Não pode ser negativo<br />";
}
if (inProd.length <= 5) { 
  mensageError.innerHTML += "O campo produto deve ter no minimo 5 caracteres <br />";
}
if (!inData.length) { 
  mensageError.innerHTML += "O campo data está incorreta <br />";
}
if (inFone.length <= 5) { 
  mensageError.innerHTML += "O campo telefone deve ter no minimo 5 caracteres <br />";
    
  }
  if (inFone.length <= 5) { 
    mensageError.innerHTML += "O campo produto deve ter no minimo 5 caracteres <br />";
  }
  if (inVal < 0) { 
    mensageError.innerHTML += "não pode ser negativo <br />";
  }

  if(mensageError.innerHTML != ""){
    mensageError.style.display = "block";
  }
  // mostrar | ocultar erro
  mensageError.innerText == ""
    ? ((mensageError.style.display = "none"), (mensageError.innerText = "enviado!"))
    : (mensageError.style.display = "block");


    mensageError.innerText == "enviado!" &&
    ((mensageError.style.display = "block"),
    (mensageError.innerText = "Formulário enviado com sucesso!"),
    (mensageError.className = "verde"));
};

// getElementById.value = ""
// String = Text
// .minlength >= 5
// qtd e valor >= 0
// diverro.style.display = None
// diverro.style.display = block

