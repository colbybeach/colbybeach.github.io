$(function() {

    
    var win = $(this);

    $(window).on('resize', function(){

      if (win.width() > 750) {

          $("#bcHalfLeft").css("float", "left");
          $("#bcHalfLeft").css("height", "1100px");

          $("#bcHalfRight").css("float", "right");


          $(".grid-container").css("width", "67%")
          $(".grid-item").css("font-size", "120%")

      }else{
    

        //Software Page 
        $("#bcHalfLeft").css("float", "none");
        $("#bcHalfLeft").css("margin", "auto");
        $("#bcHalfLeft").css("height", "500px");

        $("#bcHalfRight").css("float", "none");
        $("#bcHalfRight").css("margin", "auto");


        $(".grid-container").css("width", "100%")
        $(".grid-item").css("font-size", "100%")

      }

    });


     $(document).ready(function() {
        if (win.width() > 750) {
       

            $("#bcHalfLeft").css("float", "left");
            $("#bcHalfLeft").css("height", "1100px");
            $("#bcHalfRight").css("float", "right");

            $(".grid-container").css("width", "67%")
            $(".grid-item").css("font-size", "120%")


        }else{

            $("#bcHalfLeft").css("float", "none");
            $("#bcHalfLeft").css("margin", "auto");
            $("#bcHalfLeft").css("height", "500px");


            $("#bcHalfRight").css("float", "none");
            $("#bcHalfRight").css("margin", "auto");

            $(".grid-container").css("width", "100%")
            $(".grid-item").css("font-size", "100%")


        }
  });



});
