$(document).ready(function() {

  $('.cssinfo').hide();

  $('.cssinfobutton').click(function() {
    $ (this).next().slideToggle(300);
  });

});
