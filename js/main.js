$(document).ready(function() {

    var btn1 = $('#btn1');
    var btn2 = $('#btn2');
    var btn3 = $('#btn3');
    var btn4 = $('#btn4');
    var btn5 = $('#btn5');
    var btn6 = $('#btn6');
    var btn7 = $('#btn7');
    var btn8 = $('#btn8');
    var btn9 = $('#btn9');

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
                $(this).html('<img class="img-responsive token" src="images/x-token.png">');

                checkWin();
                checkDraw();

            } else {
                $(".gameboard").effect("shake");
                // alert("That square has already been played. Please choose another square");
            }

        } else {


            validatePlay(this);

            if (playValid) {
                $(this).removeClass('free');
                $(this).addClass('played');
                $(this).addClass('O-play');
                $(this).html('<img class="img-responsive token" src="images/o-token.svg">');

                checkWin();
                checkDraw();
                

            } else {
                $(".gameboard").effect("shake");
                // alert("That square has already been played. Please choose another square");
            }

        }
    });

    function validatePlay(squareplayed) {
        playValid = true;
        if ($(squareplayed).hasClass('free')) {
            playValid = true;
        } else {
            playValid = false;
            turn--;
        }
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
            // alert("Player X wins!")
            $('#xWinModal').modal('show'); 
            // BootstrapDialog.alert('Hi Apple!');
        
        } else {
            // alert("Player O wins!")
            $('#oWinModal').modal('show'); 
        }
        clearBoard();
    }

    function checkWin() {

        if (btn1.hasClass('X-play') && btn2.hasClass('X-play') && btn3.hasClass('X-play')) {
            winAlert("X");
        } else if (btn1.hasClass('O-play') && btn2.hasClass('O-play') && btn3.hasClass('O-play')) {
            winAlert("O");
        } else if (btn4.hasClass('X-play') && btn5.hasClass('X-play') && btn6.hasClass('X-play')) {
            winAlert("X");
        } else if (btn4.hasClass('O-play') && btn5.hasClass('O-play') && btn6.hasClass('O-play')) {
            winAlert("O");
        } else if (btn7.hasClass('X-play') && btn8.hasClass('X-play') && btn9.hasClass('X-play')) {
            winAlert("X");
        } else if (btn7.hasClass('O-play') && btn8.hasClass('O-play') && btn9.hasClass('O-play')) {
            winAlert("O");
        } else if (btn1.hasClass('X-play') && btn4.hasClass('X-play') && btn7.hasClass('X-play')) {
            winAlert("X");
        } else if (btn1.hasClass('O-play') && btn4.hasClass('O-play') && btn7.hasClass('O-play')) {
            winAlert("O");
        } else if (btn5.hasClass('X-play') && btn2.hasClass('X-play') && btn8.hasClass('X-play')) {
            winAlert("X");
        } else if (btn5.hasClass('O-play') && btn2.hasClass('O-play') && btn8.hasClass('O-play')) {
            winAlert("O");
        } else if (btn6.hasClass('X-play') && btn9.hasClass('X-play') && btn3.hasClass('X-play')) {
            winAlert("X");
        } else if (btn6.hasClass('O-play') && btn9.hasClass('O-play') && btn3.hasClass('O-play')) {
            winAlert("O");
        } else if (btn1.hasClass('X-play') && btn5.hasClass('X-play') && btn9.hasClass('X-play')) {
            winAlert("X");
        } else if (btn1.hasClass('O-play') && btn5.hasClass('O-play') && btn9.hasClass('O-play')) {
            winAlert("O");
        } else if (btn5.hasClass('X-play') && btn7.hasClass('X-play') && btn3.hasClass('X-play')) {
            winAlert("X");
        } else if (btn5.hasClass('O-play') && btn7.hasClass('O-play') && btn3.hasClass('O-play')) {
            winAlert("O");
        }
    }

    function checkDraw() {

        if (!($('.gm-piece').hasClass('free'))) {
            // alert("Draw! Try playing again!");
            $('#drawModal').modal('show'); 
            clearBoard();
        }
    }

    $('#reset-btn').on('click', function() {
        clearBoard();
    })


});
