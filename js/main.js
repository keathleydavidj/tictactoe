$(document).ready(function() {

    var sq1 = $('#btn1');
    var sq2 = $('#btn2');
    var sq3 = $('#btn3');
    var sq4 = $('#btn4');
    var sq5 = $('#btn5');
    var sq6 = $('#btn6');
    var sq7 = $('#btn7');
    var sq8 = $('#btn8');
    var sq9 = $('#btn9');

    var playValid = false;
    var win = false;
    var turn = 0;


    $('.gm-piece').on('click', function() {
        turn++;
        if (turn % 2 != 0) {


            validatePlay(this);

            if (playValid) {
                $(this).removeClass('free');
                $(this).addClass('played');
                $(this).addClass('X-play');
                $(this).html("X");

                checkDraw();
                checkWin();

            } else {
                alert("That square has already been played. Please choose another square");
            }

        } else {


            validatePlay(this);

            if (playValid) {
                $(this).removeClass('free');
                $(this).addClass('played');
                $(this).addClass('O-play');
                $(this).html("O");

                checkDraw();
                checkWin();

            } else {
                alert("That square has already been played. Please choose another square");
            }

        }
    });

    function validatePlay(squareplayed) {
        playValid = true;
        // if ($(squareplayed).hasClass('free')) {
        //     playValid = true;
        // } else {
        //     playValid = false;
        //     return false;
        // }
    }

    function clearBoard() {
        $('.gm-piece').removeClass('played');
        $('.gm-piece').removeClass('O-play');
        $('.gm-piece').removeClass('X-play');
        $('.gm-piece').html('');
        $('.gm-piece').addClass('free');
        turn = 0;
    }

    function winAlert(player) {
        win = true;

        if (player == "X") {
            alert("Player X wins!")
        } else {
            alert("Player O wins!")
        }
        clearBoard();
    }

    function checkWin() {

        if (sq1.hasClass('X-play') && sq2.hasClass('X-play') && sq3.hasClass('X-play')) {
            winAlert("X");
        } else if (sq1.hasClass('O-play') && sq2.hasClass('O-play') && sq3.hasClass('O-play')) {
            winAlert("O");
        } else if (sq4.hasClass('X-play') && sq5.hasClass('X-play') && sq6.hasClass('X-play')) {
            winAlert("X");
        } else if (sq4.hasClass('O-play') && sq5.hasClass('O-play') && sq6.hasClass('O-play')) {
            winAlert("O");
        } else if (sq7.hasClass('X-play') && sq8.hasClass('X-play') && sq9.hasClass('X-play')) {
            winAlert("X");
        } else if (sq7.hasClass('O-play') && sq8.hasClass('O-play') && sq9.hasClass('O-play')) {
            winAlert("O");
        } else if (sq1.hasClass('X-play') && sq4.hasClass('X-play') && sq7.hasClass('X-play')) {
            winAlert("X");
        } else if (sq1.hasClass('O-play') && sq4.hasClass('O-play') && sq7.hasClass('O-play')) {
            winAlert("O");
        } else if (sq5.hasClass('X-play') && sq2.hasClass('X-play') && sq8.hasClass('X-play')) {
            winAlert("X");
        } else if (sq5.hasClass('O-play') && sq2.hasClass('O-play') && sq8.hasClass('O-play')) {
            winAlert("O");
        } else if (sq6.hasClass('X-play') && sq9.hasClass('X-play') && sq3.hasClass('X-play')) {
            winAlert("X");
        } else if (sq6.hasClass('O-play') && sq9.hasClass('O-play') && sq3.hasClass('O-play')) {
            winAlert("O");
        } else if (sq1.hasClass('X-play') && sq5.hasClass('X-play') && sq9.hasClass('X-play')) {
            winAlert("X");
        } else if (sq1.hasClass('O-play') && sq5.hasClass('O-play') && sq9.hasClass('O-play')) {
            winAlert("O");
        } else if (sq5.hasClass('X-play') && sq7.hasClass('X-play') && sq3.hasClass('X-play')) {
            winAlert("X");
        } else if (sq5.hasClass('O-play') && sq7.hasClass('O-play') && sq3.hasClass('O-play')) {
            winAlert("O");
        }
    }

    function checkDraw() {

        if (!($('.gm-piece').hasClass('free'))) {
            alert("Draw! Try playing again!");
            clearBoard();
        }
    }

    $('#reset-btn').on('click', function() {
        clearBoard();
    })


});
