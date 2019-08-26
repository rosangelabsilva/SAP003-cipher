//eventos da página: clique, input
//todas as interações com HTML
document.getElementById("clickEncode").addEventListener("click", clickEncode);
function clickEncode() {
  event.preventDefault();
  let mensagem = document.getElementById("mensagem").value;
  let chave = parseInt(document.getElementById("chave").value);
  let result = window.cipher.encode(chave, mensagem);
  document.getElementById("message").innerHTML= result;
}
document.getElementById("clickDecode").addEventListener("click", clickDecode);
function clickDecode() {
  event.preventDefault();
  let mensagem = document.getElementById("mensagem").value;
  let chave = parseInt(document.getElementById("chave").value);
  let result1= window.cipher.decode(chave, mensagem);
  document.getElementById("message2").innerHTML= result1;
}