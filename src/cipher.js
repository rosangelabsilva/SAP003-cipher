//funções para cifrar
window.cipher = {
  encode: encode,
  decode: decode
};

function encode(mensagem, chave) {
  let resultado="";
  for (let i=0; i<mensagem.length; i++) {
    let encodeMessage = ((mensagem.charCodeAt(i) - 65 + chave) % 26) + 65;
    resultado += String.fromCharCode(encodeMessage);
  }
  return resultado;

//  return mensagem + " " + chave
  // encoda a msg e usa o deslocamento
}

function decode(mensagem, chave) {
//desencoda a msg com o deslocamento
  let decifrar="";
  for (let i=0; i<mensagem.length; i++) {
    let decodeMessage = ((mensagem.charCodeAt(i) - 90 - chave) % 26) + 90;
    decifrar += String.fromCharCode(decodeMessage);
  }
  return decifrar;

}

