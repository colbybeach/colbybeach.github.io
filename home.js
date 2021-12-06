function originalCSS(){

    $(".bannerMainText").css("font-size", "4.5vw")
 
  }
  
  function changeCSS(){
  
  
    $(".bannerMainText").css("font-size", "400px")
  
  
  }
  
  $(function() {
  
      var win = $(this);
  
      //When resizing 
      $(window).on('resize', function(){
  
        if (win.width() > 750) {
          originalCSS()
        }else{
          changeCSS()
          console.log("hello")
        }
  
      });
  
      //On load 
       $(document).ready(function() {
  
          if (win.width() > 750) {
            originalCSS()
          }else{
            changeCSS()
            console.log("hello")

          }
    });
  });
  