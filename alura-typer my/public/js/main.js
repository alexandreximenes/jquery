var tempoInicial = $("#tempo-restante").text();
var campo = $(".campo-digitacao");

//$(document).ready(function(){});
$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	$("#botao-reiniciar").attr("disabled", true);
	$("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}


function inicializaContadores(){
	campo.on("input", function(){
		var conteudo = campo.val();

		var qtdCaracteres = conteudo.length;
		var qtdPalavras = conteudo.split(/\S+/).length -1;

		var caracteres = $("#contador-caracteres");
		var palavras = $("#contador-palavras");

		caracteres.text(qtdCaracteres);
		palavras.text(qtdPalavras);
	});
}

function inicializaCronometro(){
	var tempoRestante = $("#tempo-restante").text();
	campo.one("focus", function(){
	$("#botao-reiniciar").attr("disabled", true);
	var cronometroID = setInterval(function(){
		tempoRestante--;
		$("#tempo-restante").text(tempoRestante);
		if(tempoRestante == 0){
			campo.attr("disabled", true);
			$("#botao-reiniciar").attr("disabled", false);
			campo.addClass("campo-desativado");
			//campo.toggleClass("campo-desativado");
			clearInterval(cronometroID);
		}
	},1000);
});
}

function inicializaMarcadores(){
	var texto = $(".frase").text();
	campo.on("input", function(){
		var digitado = campo.val();
		//Essa funcao
		var digitouCorreto = texto.startsWith(digitado);
		if(digitouCorreto){
			campo.addClass("borda-verde");
			campo.removeClass("borda-vermelha");
		}else{
			campo.addClass("borda-vermelha");
			campo.removeClass("borda-verde");
		}
		//OU
		/*var comparavel = texto.substr(0, digitado.length);
		if(digitado == comparavel){
			campo.addClass("borda-verde");
			campo.removeClass("borda-vermelha");
		}else{
			campo.addClass("borda-vermelha");
			campo.removeClass("borda-verde");
		}*/
	});
	

}

$("#botao-reiniciar").click(reiniciaJogo);

function reiniciaJogo(){
		campo.attr("disabled", false).val("").focus();
		$("#contador-caracteres").text("0");
		$("#contador-palavras").text("0");
		$("#tempo-restante").text(tempoInicial);
		campo.removeClass("campo-desativado");
		//campo.toggleClass("campo-desativado");
		inicializaCronometro();
		campo.removeClass("borda-verde");
		campo.removeClass("borda-vermelha");

}

/*
campo.on("blur", function(){} perde o foco
campo.on("focus", function(){} recebe o foco
campo.on("change", function(){} recebe mundanca
campo.on("input", function(){} quando e alterado seu input
campo.on("click", function(){} quando eh clicado
campo.on("dbcclick", function(){} quando eh clicado 2 vezes
*

var tempoRestante = $("#tempo-restante").text();
campo.one("focus", function(){
	var cronometroID = setInterval(function(){
		tempoRestante--;
		$("#tempo-restante").text(tempoRestante);
		if(tempoRestante == 0){
			campo.attr("disabled", true);
			clearInterval(cronometroID);
		}
	}, 1000);
});
/

/*var campo = $(".campo-digitacao");
campo.on("input", function(){
	var conteudo = campo.val();
	var qtdPalavras = conteudo.split(/\S+/).length - 1; 
	var qtdCaracteres = conteudo.length;
	
	var caracteres = $("#contador-caracteres");
	var palavras = $("#contador-palavras");

	caracteres.text(qtdCaracteres);
	palavras.text(qtdPalavras);
	
});*/