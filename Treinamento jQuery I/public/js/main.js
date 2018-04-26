let _tempoInicial = $("#tempo-digitacao").text();
let _textarea = $(".textarea-digitacao");    

//ECMA5
$(  () => {
        atualizaTamanhoFrase();
        inicializaContadores();
        inicializaCronometro();
        $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    let _frase = $(".frase").text();
    let _numPalavras = _frase.split(" ").length;
    let _tamanhoFrase = $("#tamanho-frase").text(_numPalavras);
}

function inicializaContadores() {
    // evento de caractere e palavras
    _textarea.on('input', () => {
        let _textoDigitado = _textarea.val();
        let _qtdPalavras = _textoDigitado.split(/\S+/).length -1;
        $("#contador-palavras").text(_qtdPalavras);
        $("#contador-caracteres").text(_textoDigitado.length);

    });
}

//Cronometro 
function inicializaCronometro() {
    let _tempoRestante = $("#tempo-digitacao").text();
    _textarea.one('focus', () => {
        let _tempo = setInterval( () => {
            console.log(_tempoRestante--);
            $("#tempo-digitacao").text(_tempoRestante);
            if(_tempoRestante < 1) {
                _textarea.attr("disabled", true); 
                clearInterval(_tempo);
                //_textarea.css('background-color', 'lightgray');
                _textarea.addClass('campo-desativado');
            }
        }, 1000);
    });    
}

function reiniciaJogo() {
    _textarea.attr("disabled", false);
    _textarea.val("");
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(_tempoInicial);
    inicializaCronometro();
     _textarea.removeClass("campo-desativado");
}


_textarea.blur( () => console.log("blur") );


