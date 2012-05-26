!function ($) {
    $.fn.countDown = function (settings, to) {
        settings = jQuery.extend({
            duration:1000,
            startNumber:30,
            endNumber:0,
            callBack:function () {
            }
        }, settings);
        return this.each(function () {
            //where do we start?
            if (!to && to != settings.endNumber) {
                to = settings.startNumber;
            }

            //set the countdown to the starting number
            $(this).text(to);

            //loopage
            $(this).animate({
                fontSize:30
            }, settings.duration, "", function () {
                if (to > settings.endNumber + 1) {
                    $(this).text(to - 1).countDown(settings, to - 1);
                }
                else {
                    settings.callBack(this);
                }
            });

        });
    };
}(window.jQuery);
