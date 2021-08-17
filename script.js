var player = "x"

$('.sqr').click(play)

function play() {

    if (!$(this).hasClass('full')) {
        if (player == "x") {
            $(this).addClass('x').html('X')            
            changePlayer('o')
        }
        else {
            $(this).addClass('o').html('O')            
            changePlayer('x')
        }
        $(this).addClass('full');
        winPattern()     
    }
}

function winPattern() {
    if ( $('.a').hasClass('x') && $('.b').hasClass('x') && $('.c').hasClass('x')){ endGame("x") }
    if ( $('.d').hasClass('x') && $('.e').hasClass('x') && $('.f').hasClass('x')){ endGame("x") }
    if ( $('.g').hasClass('x') && $('.h').hasClass('x') && $('.i').hasClass('x')){ endGame("x") }
    if ( $('.a').hasClass('x') && $('.d').hasClass('x') && $('.g').hasClass('x')){ endGame("x") }
    if ( $('.b').hasClass('x') && $('.e').hasClass('x') && $('.h').hasClass('x')){ endGame("x") }
    if ( $('.c').hasClass('x') && $('.f').hasClass('x') && $('.i').hasClass('x')){ endGame("x") }
    if ( $('.a').hasClass('x') && $('.e').hasClass('x') && $('.i').hasClass('x')){ endGame("x") }
    if ( $('.c').hasClass('x') && $('.e').hasClass('x') && $('.g').hasClass('x')){ endGame("x") }

    if ( $('.a').hasClass('o') && $('.b').hasClass('o') && $('.c').hasClass('o')){ endGame("o") }
    if ( $('.d').hasClass('o') && $('.e').hasClass('o') && $('.f').hasClass('o')){ endGame("o") }
    if ( $('.g').hasClass('o') && $('.h').hasClass('o') && $('.i').hasClass('o')){ endGame("o") }
    if ( $('.a').hasClass('o') && $('.d').hasClass('o') && $('.g').hasClass('o')){ endGame("o") }
    if ( $('.b').hasClass('o') && $('.e').hasClass('o') && $('.h').hasClass('o')){ endGame("o") }
    if ( $('.c').hasClass('o') && $('.f').hasClass('o') && $('.i').hasClass('o')){ endGame("o") }
    if ( $('.a').hasClass('o') && $('.e').hasClass('o') && $('.i').hasClass('o')){ endGame("o") }
    if ( $('.c').hasClass('o') && $('.e').hasClass('o') && $('.g').hasClass('o')){ endGame("o") }   
}

function endGame(p) {
    $('.sqr').addClass('full');
    changePlayer(p)
    $('.desc').css('display','none');
    $('.winner').css('display','flex');
}

function changePlayer(p) {
    player = p;
    $("span").removeClass().addClass('player ' + p).html(p)
}