$(function() {
  $("button#btn1").click(function() {
    $("ul#you-said").prepend("<li>Hello computer!</li>")
    $("ul#computer-said").prepend("<li>Beep boop beep beep boop.</li>")
  });

  $("button#btn2").click(function() {
    $("ul#you-said").prepend("<li>Do you have any secrets?</li>")
    $("ul#computer-said").prepend("<li>Beep boop beep beep boop.</li>")
  });

  $("button#btn3").click(function() {
    $("ul#you-said").prepend("<li>What is your name?</li>")
    $("ul#computer-said").prepend("<li>Beep boop beep beep boop.</li>")
  });

  $("button#btn4").click(function() {
    $("ul#you-said").prepend("<li>You look lovely today!</li>")
    $("ul#computer-said").prepend("<li>Beep boop beep beep boop.</li>")
  });

  $("button#btn5").click(function() {
    $("ul#you-said").prepend("<li>Do you know any good computer jokes?</li>")
    $("ul#computer-said").prepend("<li>Beep boop beep beep boop.</li>")
  });

  $("button#btn6").click(function() {
    $("ul#you-said").prepend("<li>Goodbye computer!</li>")
    $("ul#computer-said").prepend("<li>Beep boop beep beep boop.</li>")
  });
});
