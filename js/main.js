$(document).ready(function() {
  var turn = 0;
  var p1 = 'x';
  var p2 = 'o';
  $('.gm-piece').on('click', function() {
    turn++
    console.log(turn);
  });

  $('#btn0').on('click', function() {
    if (turn%2 == 0)
      $('#btn0').html("o");
    else 
      $('#btn0').html("x");
  });
  $('#btn1').on('click', function() {
    if (turn%2 == 0)
      $('#btn1').html("o");
    else 
      $('#btn1').html("x");
  });
  $('#btn2').on('click', function() {
    if (turn%2 == 0)
      $('#btn2').html("o");
    else 
      $('#btn2').html("x");
  });
  $('#btn3').on('click', function() {
    if (turn%2 == 0)
      $('#btn3').html("o");
    else 
      $('#btn3').html("x");
  });
  $('#btn4').on('click', function() {
    if (turn%2 == 0)
      $('#btn4').html("o");
    else 
      $('#btn4').html("x");
  });
  $('#btn5').on('click', function() {
    if (turn%2 == 0)
      $('#btn5').html("o");
    else 
      $('#btn5').html("x");
  });
  $('#btn6').on('click', function() {
    if (turn%2 == 0)
      $('#btn6').html("o");
    else 
      $('#btn6').html("x");
  });
  $('#btn7').on('click', function() {
    if (turn%2 == 0)
      $('#btn7').html("o");
    else 
      $('#btn7').html("x");
  });
  $('#btn8').on('click', function() {
    if (turn%2 == 0)
      $('#btn8').html("o");
    else 
      $('#btn8').html("x");
  });
});
