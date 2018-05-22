let valorTotal = [];

document.querySelectorAll('.item-total')
        .forEach(item => valorTotal.push( parseFloat(item.textContent) ));

let mTotal = valorTotal.reduce((total, i) => total + i, 0.0);

console.log("com Vanila Javascript : " + mTotal);


$(function () {
    let total = 0;
    let itemTotal = $('.item-total');
    
    for(var i = 0;i < itemTotal.length; i++){
        total += parseFloat( $(itemTotal[i]).text() );
    }
    //console.log(total);
    
    //Setando na pagina resultado
    $('#valor-total').text(total);
    $('#quantidade-de-itens').text(itemTotal.length);


});