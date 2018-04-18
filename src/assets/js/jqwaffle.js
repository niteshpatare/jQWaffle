/* jQWaffle-v1.0.0 */

(function($){
  $.fn.jQWaffle = function(options){

    let settings = $.extend({
        // These are the defaults.
        waffleMenuActionList: {
           open: "open",
           close: "close",
           toggle: "toggle"
        },
        accountMenuActionList: {
            open: "open",
            close: "close",
            toggle: "toggle"
        }
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

    $(document).on("click", (e) => {
        if(!$($navFlyMenu).hasClass('alwaysHidden')){
            alwaysHidden(e);
        }
    });

    $( $waffleLauncher , $waffleMobileLauncher).on("click", (e) => {
        waffleToggle(e);
    });

    $($adminOpenButton ).on("click", (e) => {
      adminToggle(e);
    });

    if($adminCloseButton){
        $('body .admin-flyMenu .menuClosebutton ').on("click", $adminCloseButton, (e) => {
          adminToggle(e);
        });
    }

    $($dotsButton , $closeButton).on("click", (e) => {
      closeToggle(e);
    });

    if($closeButton){
        $($closeButton).on("click", (e) => {
          closeToggle(e);
        });
    }

    $( window ).resize( () => {
      resizeToggle();
    });

    let waffleToggle = (e) => {
      if(e) e.stopPropagation();
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

    let closeToggle = (e) => {
      if(e) e.stopPropagation();
      if(!$closeButton.hasClass("showMe")){
          $closeButton.addClass("showMe");
          $dotsButton.addClass("hideMe");
          $dotsButtonLanucher.addClass("showMe");
          $navFlyMenu.removeClass("showMe");
      }
      else if($closeButton.hasClass("showMe") ){
          $closeButton.removeClass("showMe");
          $dotsButton.removeClass("hideMe");
          $dotsButtonLanucher.removeClass("showMe");
          $navFlyMenu.removeClass("showMe");
      }
    };

    let resizeToggle = () => {
      if($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && !$($dotsButton + ':visible').length == 0 && windowWidth <768 ){
          $navFlyMenu.removeClass("showMe");
      }
    };

    let adminToggle = (e) => {
      if(e) e.stopPropagation();
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

    let alwaysHidden = (e) => {
      if(e) e.stopPropagation();
      let container = $($navFlyMenu);
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0 )
      {
          container.addClass("alwaysHidden");
      }
    };

    if ( settings.waffleMenuAction === settings.waffleMenuActionList.open ) {
        element.each( (e) => {
          console.log(element+'Open waffleMenuAction code');
          $navFlyMenu.addClass("showMe");
        });
    }

    if ( settings.waffleMenuAction === settings.waffleMenuActionList.close ) {
        element.each( (e) => {
          console.log(element+'Close waffleMenuAction code');
          $navFlyMenu.removeClass("showMe");
        });
    }

    if ( settings.waffleMenuAction === settings.waffleMenuActionList.toggle ) {
        element.each( (e) => {
          console.log(element+'toggle waffleMenuAction code');
          $navFlyMenu.toggleClass("showMe");
        });
    }

    if ( settings.accountMenuAction === settings.accountMenuActionList.open) {
        element.each( (e) => {
          console.log(element+'Open accountMenuAction code');
          $adminFlyMenu.addClass("showMe");
        });
    }

    if ( settings.accountMenuAction === settings.accountMenuActionList.close ) {
        element.each( (e) => {
          console.log(element+'Close accountMenuAction code');
          $adminFlyMenu.removeClass("showMe");
        });
    }

    if ( settings.accountMenuAction === settings.accountMenuActionList.toggle ) {
        return element.each( (e) => {
          console.log(element+'Toggle accountMenuAction code');
          $adminFlyMenu.toggleClass("showMe");
        });
    }

  }

})(jQuery);
