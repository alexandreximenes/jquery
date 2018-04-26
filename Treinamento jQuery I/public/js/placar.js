function insereNoPlacar(){
    let usuario = prompt("Qual seu nome ? ");
    let tbody = $('.placar').find("tbody");
    let numPalavras = $("#contador-palavras").text();
    
    var linha = "<tr>" + 
                    "<td>" + usuario + "</td>" + 
                    "<td>" + numPalavras +"</td>" + 
                "</tr>";

    
    //Adiciona no FINAL do corpo da tabela
    //tbody.append(linha);

    //Adiciona no INICIO do corpo da tabela
    tbody.prepend(linha);

}