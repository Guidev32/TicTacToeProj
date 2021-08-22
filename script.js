var player = "x";

$('.sqr').click(play);
$('div.restart button').click(restart);


function play() {
    if (!$(this).hasClass('full')) {
        if (player == "x") {
            $(this).addClass('x').html('X');           
            changePlayer('o');
        } else {
            $(this).addClass('o').html('O');         
            changePlayer('x');
        }        
        $(this).addClass('full');
        winPattern();
    }
}

function winPattern() {
    if ( $('.a').hasClass('x') && $('.b').hasClass('x') && $('.c').hasClass('x')) {
         $('.a, .b, .c').addClass('color');
         endGame("x");
    } else if ( $('.b').hasClass('x') && $('.d').hasClass('x') && $('.e').hasClass('x') && $('.f').hasClass('x') && $('.h').hasClass('x')) {
        $('.b, .d, .e, .f, .h').addClass('color');
        endGame("x");
    } else if ( $('.d').hasClass('x') && $('.e').hasClass('x') && $('.f').hasClass('x')) {
         $('.d, .e, .f').addClass('color');
         endGame("x");
    } else if ( $('.g').hasClass('x') && $('.h').hasClass('x') && $('.i').hasClass('x')) {
         $('.g, .h, .i').addClass('color');
         endGame("x") 
    } else if ( $('.a').hasClass('x') && $('.d').hasClass('x') && $('.g').hasClass('x')) {
         $('.a, .d, .g').addClass('color');
         endGame("x");
    } else if ( $('.b').hasClass('x') && $('.e').hasClass('x') && $('.h').hasClass('x')) {
         $('.b, .e, .h').addClass('color');
         endGame("x");
    } else if ( $('.c').hasClass('x') && $('.f').hasClass('x') && $('.i').hasClass('x')) {
         $('.c, .f, .i').addClass('color');
         endGame("x");
    } else if ($('.a').hasClass('x') && $('.e').hasClass('x') && $('.i').hasClass('x') && $('.c').hasClass('x') && $('.g').hasClass('x')) {
        $('.a, .e, .i, .c, .g').addClass('color');
        endGame("x");
    } else if ( $('.a').hasClass('x') && $('.e').hasClass('x') && $('.i').hasClass('x')) {
         $('.a, .e, .i').addClass('color');
         endGame("x");
    } else if ( $('.c').hasClass('x') && $('.e').hasClass('x') && $('.g').hasClass('x')) {
         $('.c, .e, .g').addClass('color');
         endGame("x");
    } else if ( $('.a').hasClass('o') && $('.b').hasClass('o') && $('.c').hasClass('o')) {
         $('.a, .b, .c').addClass('color');
         endGame("o");
    } else if ( $('.d').hasClass('o') && $('.e').hasClass('o') && $('.f').hasClass('o')) {
         $('.d, .e, .f').addClass('color');
         endGame("o");
    } else if ( $('.g').hasClass('o') && $('.h').hasClass('o') && $('.i').hasClass('o')) {
         $('.g, .h, .i').addClass('color');
         endGame("o");
    } else if ( $('.a').hasClass('o') && $('.d').hasClass('o') && $('.g').hasClass('o')) {
         $('.a, .d, .g').addClass('color');
         endGame("o");
    } else if ( $('.b').hasClass('o') && $('.e').hasClass('o') && $('.h').hasClass('o')) {
         $('.b, .e, .h').addClass('color');
         endGame("o");
    } else if ( $('.c').hasClass('o') && $('.f').hasClass('o') && $('.i').hasClass('o')) {
         $('.c, .f, .i').addClass('color');
         endGame("o");
    } else if ( $('.a').hasClass('o') && $('.e').hasClass('o') && $('.i').hasClass('o')) {
         $('.a, .e, .i').addClass('color');
         endGame("o");
    } else if ( $('.c').hasClass('o') && $('.e').hasClass('o') && $('.g').hasClass('o')) {
         $('.c, .e, .g').addClass('color');
         endGame("o");
    } else if ( $('.sqr.full').length == 9 ){ tie() }
}

function endGame(p) {
    $('.sqr').addClass('full');
    changePlayer(p);
    $('.desc').css('display','none');
    $('.winner').css('display','flex');
    $('.restart').css('display','flex');
}

function changePlayer(p) {
    player = p;
    $("span").removeClass().addClass('player ' + p).html(p);
}

function tie() {
    $('.desc').css('display','none');
    $('.tie, .restart').css('display','flex');    
}

function restart() {
    changePlayer("x");
    $('.sqr').removeClass('x').removeClass('o').removeClass('full').removeClass('color').html('');
    $('.desc').css('display','flex');
    $('.tie, .restart, .winner').css('display','none');
}