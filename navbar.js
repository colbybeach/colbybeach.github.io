$(function() {

      var header = $(".navBarNew");
      var downarrow = $(".downarrowImage");
      var readmore = $(".readmore");

      
      var scroll = $(window).scrollTop();
      var win = $(this);




      $(window).scroll(function() {

          var scroll = $(window).scrollTop();

          if (scroll >= 100) {
              header.addClass("navBarScroll");
          } else {
              header.removeClass("navBarScroll");
          }

          if(scroll >= 150){
              readmore.addClass("scrollFade");

          }else {
            readmore.removeClass("scrollFade");
          }


        });

      $(window).on('resize', function(){

        if (win.width() > 750) {

            $("#body1Left").css("font-size", "18px");
            $("#halfHalf1 img").css("width","430px");

            //Software Page 
            $("#bcHalfLeft").css("float", "left");
            $("#bcHalfRight").css("float", "right");
            $("#bcHalfRight").css("float", "right");

        }else{
          $("#body1Left").css("font-size", "1.3vw");
          $("#halfHalf1 img").css("width","70%");


        }


      });

       $(document).ready(function() {
          if (win.width() > 750) {
            $("#body1Left").css("font-size", "18px");
            $("#halfHalf1 img").css("width","430px");

          }
    });

});
