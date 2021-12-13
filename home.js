function originalCSS(){

  $("#homeBody1").css("height", "600px");
  $("#homeBody1").css("background-color", "black");


}


function changeCSS(){
  $("#homeBody1").css("height", "1000px");
  $("#homeBody1").css("background-color", "red");


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

  })

  //On load 
   $(document).ready(function() {

      if (win.width() > 750) {
        originalCSS()
      }else{
        changeCSS()
      }
  })
})
