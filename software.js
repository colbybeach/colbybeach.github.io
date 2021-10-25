function originalCSS(){

  $("#bcHalfLeft").css("float", "left");
  $("#bcHalfLeft").css("height", "1100px");

  $("#bcHalfRight").css("float", "right");
  $("#bcHalfRight").css("height", "100%");
  $("#bcHalfRight").css("width", "50%");


  $(".grid-container").css("width", "67%")
  $(".grid-container").css("font-size", "100%")
}

function changeCSS(){


  $("#bcHalfLeft").css("float", "none");
  $("#bcHalfLeft").css("margin", "auto");
  $("#bcHalfLeft").css("height", "500px");

  $("#bcHalfRight").css("float", "none");
  $("#bcHalfRight").css("margin", "auto");
  $("#bcHalfRight").css("height", "1000px");
  $("#bcHalfRight").css("width", "100%");


  $(".grid-container").css("width", "100%")
  $(".grid-container").css("font-size", "70%")





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
