function scrollH1(){
    $('html').animate({
        scrollTop: $('h1').offset().top + "px"
    }, 1000);
}

function scrollPlacar(){
    $('html').animate({
        scrollTop: $('.placar').offset().top + "px"
    }, 3000, scrollH1);
}

function ajustaAlturaTextArea(){
    $(".textarea-digitacao").animate({
        "height" : "130px"
    },300);
}