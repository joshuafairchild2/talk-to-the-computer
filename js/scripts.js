$(function() {
  var buttonNumbers = ['1','2','3','4','5','6'];
  buttonNumbers.forEach(function(buttonNumber) {
    $("button#btn" + buttonNumber).click(function() {
      $("#you-said").fadeIn();
      $("#computer-said").fadeIn();
      $("p").hide();
      $(".phrase" + buttonNumber).show();
    });
  });
});
