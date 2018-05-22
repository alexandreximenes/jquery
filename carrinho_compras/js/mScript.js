let valorTotal = [];

document.querySelectorAll('.item-total')
        .forEach(item => valorTotal.push( parseFloat(item.textContent) ));

let mTotal = valorTotal.reduce((total, i) => total + i, 0.0);

console.log("com Vanila Javascript : " + mTotal);


$(function() {
  totaliza();

  $("#desfazer").click(desfazer);

  $(".remover").click(removeItem);
});

    function desfazer(e){
        e.preventDefault();
        var trs = $('tr:visible');
        trs.removeClass('recuperado');

        trs = $('tr:hidden');
        trs.addClass('recuperado');
        
        descataTr(trs);

        trs.show();
        
        totaliza();
        
    }

    function descataTr(trs){
        var time = setInterval(() => {
          trs.toggleClass("recuperado");
        }, 1000);

        setTimeout(() => {
          clearTimeout(time);
          trs.removeClass("recuperado");
          trs.addClass('tr-normal');
        }, 5000);
    }

    function totaliza() {
        let total = 0;
        let itemTotal = $('.item-total:visible');

        for (var i = 0; i < itemTotal.length; i++) {
            total += parseFloat($(itemTotal[i]).text());
        }
        //console.log(total);

        //Setando na pagina resultado
        $('#valor-total').text(total);
        $('#quantidade-de-itens').text(itemTotal.length);
    }
    
    function removeItem(e){

        e.preventDefault();

        var novaQuantidade = parseInt($("#quantidade-de-itens").text()) - 1;

        if (novaQuantidade >= 0) $("#quantidade-de-itens").text(novaQuantidade);

        var self = $(this);
        var tr = self.closest('tr');
        var valor = tr.find('.item-total').text();
        tr.hide();

        totaliza();
    }

        // //ou poderia ser diretamente 
        // var oValor = $(this).closest('tr').find('.item-total').text();


        // var valorTotal = ($("#valor-total").text() - valor);

        // $("#valor-total").text(valorTotal);
        
        // if (novaQuantidade == 0) $("#valor-total").text(0);
        
        // //LOG
        // console.log(valorTotal + ` - ${valor} = ${valorTotal-valor}`);
        


