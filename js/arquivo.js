function enviar() {

var nome = document.getElementById('nomeDigitado');

 if(nome.value != ""){
  alert("Olá " +nome.value+ " no momento não é possivel enviar esta mensagem");
}else {
  alert("No momento não é possivel enviar esta mensagem");
}


}
