;(function($) {
    'use strict';

    $.fn.fanav = function(settings) {

        var _handler = function() {
                var nav = this,
                    $fa = $('.fa', nav);

                $fa.each(function() {
                    var text = $(this).data('text');
                    $(this).append('<span>' + text + '</span>');
                });

                $fa.hover(function() {
                    $(this).find('span').stop().slideDown('slow');
                }, function() {
                    $(this).find('span').stop().slideUp('slow');
                });
            };

        return this.each(_handler);
    };
    
})(jQuery);