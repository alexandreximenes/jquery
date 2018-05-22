let valorTotal = [];

document.querySelectorAll('.item-total')
        .forEach(item => valorTotal.push( parseFloat(item.textContent) ));

let mTotal = valorTotal.reduce((total, i) => total + i, 0.0);

console.log("com Vanila Javascript : " + mTotal);


$(function () {
    function totaliza(){
        let total = 0;
        let itemTotal = $('.item-total');

        for (var i = 0; i < itemTotal.length; i++) {
            total += parseFloat($(itemTotal[i]).text());
        }
        //console.log(total);

        //Setando na pagina resultado
        $('#valor-total').text(total);
        $('#quantidade-de-itens').text(itemTotal.length);
    }

    $('.remover').click(function(e) {
        e.preventDefault();
        
        var novaQuantidade = parseInt($("#quantidade-de-itens").text()) -1;

        if(novaQuantidade >= 0) $("#quantidade-de-itens").text(novaQuantidade);

        var self = $(this);
        var tr = self.closest('tr');
        var valor = tr.find('.item-total').text();

        var valorTotal = $("#valor-total").text();
        valorTotal -= valor;
        $("#valor-total").text(valorTotal);
        console.log(valorTotal);
        tr.remove();
        


    });

    totaliza();


});