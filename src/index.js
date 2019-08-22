//eventos da página: clique, input
//todas as interações com HTML
function clickEncode() {
  event.preventDefault();
  let mensagem = document.getElementById("mensagem").value;
  let chave = parseInt(document.getElementById("chave").value);
  let result = window.cipher.encode(mensagem, chave);
  document.getElementById("message").innerHTML= result;
}
clickEncode();

function clickDecode() {
  event.preventDefault();
  let mensagem = document.getElementById("mensagem").value;
  let chave = parseInt(document.getElementById("chave").value);
  let result1= window.cipher.decode(mensagem, chave);
  document.getElementById("message2").innerHTML= result1;

}
clickDecode();