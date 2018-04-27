$('#botao-placar').click(mostraPlacar);

function mostraPlacar() {
  $(".placar").stop().slideToggle(500);
}

function insereNoPlacar(){
    let usuario = prompt("Qual seu nome ? ");
    let tbody = $('.placar').find("tbody");
    let numPalavras = $("#contador-palavras").text();
    let botao_remover = "<a class='botao-remover' href='#'><i class='small material-icons'>delete</i></a>";
    
    var linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').click(removeLinha);

    //Adiciona no FINAL do corpo da tabela
    //tbody.append(linha);

    //Adiciona no INICIO do corpo da tabela
    tbody.prepend(linha);

    $(".placar").slideDown(500);
    scrollPlacar();

}

function novaLinha(usuario, palavras) {
  var linha = $("<tr>");
  
  var colunaUsuario  =  $("<td>").text(usuario);
  var colunaPalavras =  $("<td>").text(palavras);
  var colunaRemover  =  $("<td>");

  var link = $("<a>").attr("href", "#").addClass("botao-remover");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);
  
  return linha;
}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();

}

