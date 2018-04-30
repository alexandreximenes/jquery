$('#botao-placar').click(mostraPlacar);
$("#botao-sync").click(sincronizarPlacar);

function mostraPlacar() {
  $(".placar").stop().slideToggle(500);
}

function sincronizarPlacar(){
  let _placar = []; 
  let linha = $("tbody>tr");

  // Function EACH do jQuery nao funciona com aero function
  // ex: linha.each( () => {});
  linha.each(function(){
    let usuario = $(this).find('td:nth-child(1)').text();
    let pontos = $(this).find('td:nth-child(2)').text();

    // Adiciona no array linha
      let dados = {
        usuario : usuario,
        pontos: pontos
      };

      if(dados.usuario == "" || dados.pontos == "") {
        console.log('sem dados' + this);
        return;
      }else{
        _placar.push(dados);
      }

  });

  enviarPlacarParaOServidor(_placar);
}

function enviarPlacarParaOServidor(_placar) {
  $(".progress").show();

  //convertendo o array para objeto para enviar para o servidor  
  var dadosPlacar = {
    dados: _placar
  }

  console.log(dadosPlacar);

  $.post("/placar", dadosPlacar, function() {
    console.log("dados enviados com sucesso");
    
  })
    .fail( () => {
      mostrarMensagem("erro ao enviar dados do placar para o servidor");
      $(".progress").hide();
    })
    .always( $(".progress").hide() );

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


