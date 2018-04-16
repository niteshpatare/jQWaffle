$(document).ready(function(){

      var $navFlyMenu = $(".nav-flyMenu");
      var $adminFlyMenu = $(".admin-flyMenu");
      var $closeButton = $(".closeButton");
      var $dotsButton = $(".dotsButton");
      var $dotsButtonLanucher = $(".dotsButtonLanucher");
      var $navAppLauncher = $(".navMenuButton.appLauncher");
      var $navDotsBtnLauncher = $(".navMenuButton.dotsButtonLanucher");


      var $adminOpenButton = $(".userPersonalUrlLink");
      var $adminCloseButton = $(".admin-flyMenu .menuClosebutton");

      var windowWidth = $(window).width();
      $(document).on("click",function(e)
      {
          e.stopPropagation();
          let container = $($navFlyMenu);
          // if the target of the click isn't the container nor a descendant of the container
          if (!container.is(e.target) && container.has(e.target).length === 0 )
          {
              container.addClass("alwaysHidden");
          }
      });

    $( $navAppLauncher , $navDotsBtnLauncher).on("click", function(e){
      e.stopPropagation();
      if(!$navFlyMenu.hasClass("showMe")){
          $navFlyMenu.addClass("showMe");
          $navFlyMenu.removeClass("alwaysHidden");
          if(windowWidth <768){
            $adminFlyMenu.removeClass("showMe");
          }
          if(windowWidth >768 && windowWidth <=1024){
            $adminFlyMenu.removeClass("showMe");
          }
      }
      else if($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && windowWidth >768 ){
          $navFlyMenu.removeClass("showMe");
      }
      else if($navFlyMenu.hasClass("showMe") && $adminFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && windowWidth <768 ){
            $adminFlyMenu.removeClass("showMe");
      }
      else if($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") ){
          $navFlyMenu.removeClass("showMe");
          if(windowWidth <768){
            $adminFlyMenu.removeClass("showMe");
          }
      }
      else{
        $navFlyMenu.removeClass("alwaysHidden");
      }

    });

    $($adminOpenButton, $adminCloseButton).on("click", function(e){
      e.stopPropagation();
      if(!$adminFlyMenu.hasClass("showMe")){
          $adminFlyMenu.addClass("showMe");
          if(windowWidth >768 && windowWidth <1024 ){
              $navFlyMenu.removeClass("showMe");
          }
      }
      else if($adminFlyMenu.hasClass("showMe") ){
          $adminFlyMenu.removeClass("showMe");
          if(windowWidth <768 && $closeButton.hasClass("showMe")){

          }
      }

    });

    $($dotsButton , $closeButton).on("click", function(e){
      e.stopPropagation();
      if(!$closeButton.hasClass("showMe")){
          $closeButton.addClass("showMe");
          $dotsButton.addClass("hideMe");
          $dotsButtonLanucher.addClass("showMe");
          $navFlyMenu.removeClass("showMe");
      }
      else if($closeButton.hasClass("showMe") ){  //&& !$navFlyMenu.hasClass("alwaysHidden")
          $closeButton.removeClass("showMe");
          $dotsButton.removeClass("hideMe");
          $dotsButtonLanucher.removeClass("showMe");
          $navFlyMenu.removeClass("showMe");
      }

    });

     $( window ).resize(function() {
      if($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && !$($dotsButton + ':visible').length == 0 && windowWidth <768 ){
           $navFlyMenu.removeClass("showMe");
       }
     });



});
