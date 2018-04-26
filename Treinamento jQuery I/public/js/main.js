let _frase = $('.frase').text();
let _numPalavras = _frase.split(" ").length;

let _tamanhoFrase = $("#tamanho-frase").text(_numPalavras);

let _textarea = $(".textarea-digitacao");

// evento de caractere e palavras
_textarea.on('input', () => {
    
    let _textoDigitado = _textarea.val();
    let _qtdPalavras = _textoDigitado.split(/\S+/).length -1;
    $("#contador-palavras").text(_qtdPalavras);
    $("#contador-caracteres").text(_textoDigitado.length);

});

//Cronometro 
let _tempoRestante = $("#tempo-digitacao").text();
_textarea.one('focus', () => {
    let _tempo = setInterval( () => {
        console.log(_tempoRestante--);
        $("#tempo-digitacao").text(_tempoRestante);

        if(_tempoRestante < 1) {
            _textarea.attr("disabled", true); 
            clearInterval(_tempo);
        }
    }, 1000);
});

_textarea.on("blur", () => {
  console.log("blur");
});


