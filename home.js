function originalCSS(){
    $("#homeBody1").css("height", "600px");
    $("#body1Right").css("float", "right");

}

function changeCSS(){
    $("#homeBody1").css("height", "30000px");
    $("#body1Right").css("float", "none");

}

$(function() {

    var win = $(this);

    //When resizing 
    $(window).on('resize', function(){

      if (win.width() > 750) {
        originalCSS()
      }else{
        changeCSS()
      }

    });

    //On load 
     $(document).ready(function() {

        if (win.width() > 750) {
          originalCSS()
        }else{
          changeCSS()
        }
  });
});
