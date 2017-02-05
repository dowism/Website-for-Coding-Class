

$(document).ready(function() {

  $(".cssinfo").hide();
  $(".htmlinfo").hide();
  $(".jsinfo").hide();
  $(".jqinfo").hide();

  $(".cssinfobutton").click(function() {
    $ (".cssinfo").fadeToggle(300);
  });
  $(".htmlinfobutton").click(function() {
    $ (".htmlinfo").fadeToggle(300);
  });
  $(".jsinfobutton").click(function() {
    $ (".jsinfo").fadeToggle(300);
  });
  $(".jqinfobutton").click(function() {
    $ (".jqinfo").fadeToggle(300);
  });

});
