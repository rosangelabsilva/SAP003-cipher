//funções para cifrar
window.cipher = {
  encode: encode,
  decode: decode
};
function encode(chave, mensagem) {
  // cifra a msg e usa o deslocamento
  let resultado="";
  let encodeMessage="";
  for (let i=0; i<mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      encodeMessage=((mensagem.charCodeAt(i) - 65 + chave) % 26) + 65;
      resultado += String.fromCharCode(encodeMessage);
    } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      encodeMessage=((mensagem.charCodeAt(i) - 97 + chave) % 26) + 97;
      resultado += String.fromCharCode(encodeMessage);
    } else {
      resultado += String.fromCharCode(mensagem.charCodeAt(i));
    }
  }
  return resultado;
}
function decode(chave, mensagem) {
//descifra a msg com o deslocamento
  let decifrar="";
  let decodeMessage="";
  for (let i=0; i<mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      decodeMessage = ((mensagem.charCodeAt(i) - 90 - chave) % 26) + 90;
      decifrar += String.fromCharCode(decodeMessage);
    } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      decodeMessage = ((mensagem.charCodeAt(i) - 122 - chave) % 26) + 122;
      decifrar += String.fromCharCode(decodeMessage);
    } else {
      decifrar += String.fromCharCode(mensagem.charCodeAt(i));
    }
  }
  return decifrar;
}