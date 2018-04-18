"use strict";

/* jQWaffle-v1.0.0 */

(function ($) {
    $.fn.jQWaffle = function (options) {

        var settings = $.extend({
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
        }, options);

        var $navFlyMenu = $(".nav-flyMenu");
        var $adminFlyMenu = $(".admin-flyMenu");
        var $closeButton = $(".closeButton");
        var $dotsButton = $(".dotsButton");
        var $dotsButtonLanucher = $(".dotsButtonLanucher");
        var $waffleLauncher = $(".navMenuButton.appLauncher");
        var $waffleMobileLauncher = $(".navMenuButton.dotsButtonLanucher");
        var $adminOpenButton = $(".userPersonalUrlLink");
        var $adminCloseButton = $("span.ms-Icon--x");
        var windowWidth = $(window).width();
        var element = this;

        $(document).on("click", function (e) {
            if (!$($navFlyMenu).hasClass('alwaysHidden')) {
                alwaysHidden(e);
            }
        });

        $($waffleLauncher, $waffleMobileLauncher).on("click", function (e) {
            waffleToggle(e);
        });

        $($adminOpenButton).on("click", function (e) {
            adminToggle(e);
        });

        if ($adminCloseButton) {
            $('body .admin-flyMenu .menuClosebutton ').on("click", $adminCloseButton, function (e) {
                adminToggle(e);
            });
        }

        $($dotsButton, $closeButton).on("click", function (e) {
            closeToggle(e);
        });

        if ($closeButton) {
            $($closeButton).on("click", function (e) {
                closeToggle(e);
            });
        }

        $(window).resize(function () {
            resizeToggle();
        });

        var waffleToggle = function waffleToggle(e) {
            if (e) e.stopPropagation();
            if (!$navFlyMenu.hasClass("showMe")) {
                $navFlyMenu.addClass("showMe");
                $navFlyMenu.removeClass("alwaysHidden");
                if (windowWidth < 768) {
                    $adminFlyMenu.removeClass("showMe");
                }
                if (windowWidth > 768 && windowWidth <= 1024) {
                    $adminFlyMenu.removeClass("showMe");
                }
            } else if ($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && windowWidth > 768) {
                $navFlyMenu.removeClass("showMe");
            } else if ($navFlyMenu.hasClass("showMe") && $adminFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && windowWidth < 768) {
                $adminFlyMenu.removeClass("showMe");
            } else if ($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden")) {
                $navFlyMenu.removeClass("showMe");
                if (windowWidth < 768) {
                    $adminFlyMenu.removeClass("showMe");
                }
            } else {
                $navFlyMenu.removeClass("alwaysHidden");
            }
        };

        var closeToggle = function closeToggle(e) {
            if (e) e.stopPropagation();
            if (!$closeButton.hasClass("showMe")) {
                $closeButton.addClass("showMe");
                $dotsButton.addClass("hideMe");
                $dotsButtonLanucher.addClass("showMe");
                $navFlyMenu.removeClass("showMe");
            } else if ($closeButton.hasClass("showMe")) {
                $closeButton.removeClass("showMe");
                $dotsButton.removeClass("hideMe");
                $dotsButtonLanucher.removeClass("showMe");
                $navFlyMenu.removeClass("showMe");
            }
        };

        var resizeToggle = function resizeToggle() {
            if ($navFlyMenu.hasClass("showMe") && !$navFlyMenu.hasClass("alwaysHidden") && !$($dotsButton + ':visible').length == 0 && windowWidth < 768) {
                $navFlyMenu.removeClass("showMe");
            }
        };

        var adminToggle = function adminToggle(e) {
            if (e) e.stopPropagation();
            if (!$adminFlyMenu.hasClass("showMe")) {
                $adminFlyMenu.addClass("showMe");
                if (windowWidth > 768 && windowWidth < 1024) {
                    $navFlyMenu.removeClass("showMe");
                }
            } else if ($adminFlyMenu.hasClass("showMe")) {
                $adminFlyMenu.removeClass("showMe");
                if (windowWidth < 768 && $closeButton.hasClass("showMe")) {}
            }
            return;
        };

        var alwaysHidden = function alwaysHidden(e) {
            if (e) e.stopPropagation();
            var container = $($navFlyMenu);
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.addClass("alwaysHidden");
            }
        };

        if (settings.waffleMenuAction === settings.waffleMenuActionList.open) {
            element.each(function (e) {
                console.log(element + 'Open waffleMenuAction code');
                $navFlyMenu.addClass("showMe");
            });
        }

        if (settings.waffleMenuAction === settings.waffleMenuActionList.close) {
            element.each(function (e) {
                console.log(element + 'Close waffleMenuAction code');
                $navFlyMenu.removeClass("showMe");
            });
        }

        if (settings.waffleMenuAction === settings.waffleMenuActionList.toggle) {
            element.each(function (e) {
                console.log(element + 'toggle waffleMenuAction code');
                $navFlyMenu.toggleClass("showMe");
            });
        }

        if (settings.accountMenuAction === settings.accountMenuActionList.open) {
            element.each(function (e) {
                console.log(element + 'Open accountMenuAction code');
                $adminFlyMenu.addClass("showMe");
            });
        }

        if (settings.accountMenuAction === settings.accountMenuActionList.close) {
            element.each(function (e) {
                console.log(element + 'Close accountMenuAction code');
                $adminFlyMenu.removeClass("showMe");
            });
        }

        if (settings.accountMenuAction === settings.accountMenuActionList.toggle) {
            return element.each(function (e) {
                console.log(element + 'Toggle accountMenuAction code');
                $adminFlyMenu.toggleClass("showMe");
            });
        }
    };
})(jQuery);