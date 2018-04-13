$(document).ready(function(){

      var navFlyMenu = $(".nav-flyMenu");
      var adminFlyMenu = $(".admin-flyMenu");
      var closeButton = $(".closeButton");
      var dotsButton = $(".dotsButton");
      var dotsButtonLanucher = $(".dotsButtonLanucher");
      var windowWidth = $(window).width();
      $(document).on("click",function(e)
      {
          e.stopPropagation();
          var container = $(".nav-flyMenu");
          // if the target of the click isn't the container nor a descendant of the container
          if (!container.is(e.target) && container.has(e.target).length === 0 )
          {
              container.addClass("alwaysHidden");
          }
      });

    $(".navMenuButton.appLauncher, .navMenuButton.dotsButtonLanucher").on("click", function(e){
      e.stopPropagation();
      if(!navFlyMenu.hasClass("showMe")){
          navFlyMenu.addClass("showMe");
          navFlyMenu.removeClass("alwaysHidden");
          if(windowWidth <768){
            adminFlyMenu.removeClass("showMe");
          }
          if(windowWidth >768 && windowWidth <=1024){
            adminFlyMenu.removeClass("showMe");
          }
      }
      else if(navFlyMenu.hasClass("showMe") && !navFlyMenu.hasClass("alwaysHidden") && windowWidth >768 ){
          navFlyMenu.removeClass("showMe");
      }
      else if(navFlyMenu.hasClass("showMe") && adminFlyMenu.hasClass("showMe") && !navFlyMenu.hasClass("alwaysHidden") && windowWidth <768 ){
            adminFlyMenu.removeClass("showMe");
      }
      else if(navFlyMenu.hasClass("showMe") && !navFlyMenu.hasClass("alwaysHidden") ){
          navFlyMenu.removeClass("showMe");
          if(windowWidth <768){
            adminFlyMenu.removeClass("showMe");
          }
      }
      else{
        navFlyMenu.removeClass("alwaysHidden");
      }

    });



});
