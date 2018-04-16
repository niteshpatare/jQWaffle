(function($){
  $.fn.jQWaffle = function(options){

    console.log('jQWaffle');
    let settings = $.extend({
         // These are the defaults.
         waffleMenuActionList: ["open","close","toggle"], //values- open,close,toggle
         accountMenuActionList: ["open","close","toggle"],
         waffleMenuAction: 'close',
         accountMenuAction: 'close',
       },
       options
    );

    let $navFlyMenu = $(".nav-flyMenu");
    let $adminFlyMenu = $(".admin-flyMenu");
    let $closeButton = $(".closeButton");
    let $dotsButton = $(".dotsButton");
    let $dotsButtonLanucher = $(".dotsButtonLanucher");
    let $waffleLauncher = $(".navMenuButton.appLauncher");
    let $waffleMobileLauncher = $(".navMenuButton.dotsButtonLanucher");
    let $adminOpenButton = $(".userPersonalUrlLink");
    let $adminCloseButton = $("span.ms-Icon--x");
    let windowWidth = $(window).width();
    let element = this;

    if ( settings.waffleMenuAction === settings.waffleMenuActionList[0] ) {
        element.each(function(){
          console.log(element+'Open waffleMenuAction code');
        });
    }

    if ( settings.waffleMenuAction === settings.waffleMenuActionList[1] ) {
        element.each(function(){
          console.log(element+'Close waffleMenuAction code');
        });
    }

    if ( settings.waffleMenuAction === settings.waffleMenuActionList[2] ) {
        element.each(function(e){
          console.log(element+'toggle waffleMenuAction code');
          waffleToggle(e);
        });
    }

    if ( settings.accountMenuAction === settings.accountMenuActionList[0]) {
        element.each(function(){
          console.log(element+'Open accountMenuAction code');
        });
    }

    if ( settings.accountMenuAction === settings.accountMenuActionList[1] ) {
        element.each(function(){
          console.log(element+'Close accountMenuAction code');
        });
    }

    if ( settings.accountMenuAction === settings.accountMenuActionList[2] ) {
        return element.each(function(){
          console.log(element+'Toggle accountMenuAction code');
        });
    }

//


    $(document).on("click",function(e)
    {
        alwaysHidden(e);
    });

    $( $waffleLauncher , $waffleMobileLauncher).on("click", function(e){
        waffleToggle(e);
    });

    $($adminOpenButton ).on("click", function(e){
      adminToggle(e);
    });

if($adminCloseButton){
    $('body .admin-flyMenu .menuClosebutton ').on("click", $adminCloseButton, function(e){
      adminToggle(e);
    });
}

    $($dotsButton , $closeButton).on("click", function(e){
      closeToggle(e);
    });

if($closeButton){
    $($closeButton).on("click", function(e){
      closeToggle(e);
    });
}

    $( window ).resize(function() {
      resizeToggle();
    });

    let waffleToggle = function(e){
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
    };

    let closeToggle = function(e){
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
    };

    let resizeToggle = function(){
      if($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && !$($dotsButton + ':visible').length == 0 && windowWidth <768 ){
          $navFlyMenu.removeClass("showMe");
      }
    };

    let adminToggle = function(e){
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
      return;
    };

    let alwaysHidden = function(e){
      e.stopPropagation();
      let container = $($navFlyMenu);
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0 )
      {
          container.addClass("alwaysHidden");
      }
    };

//

  }




})(jQuery);
