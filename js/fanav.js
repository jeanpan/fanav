/* simple jquery plugin for font-awesome icon navigation */
;(function($) {
    'use strict';

    $.fn.fanav = function(settings) {

        var _defaultSettings = {
                speed: 'slow'
            },
            _settings = $.extend(_defaultSettings, settings),
            _handler = function() {
                var nav = this,
                    $fa = $('.fa', nav);

                $fa.each(function() {
                    var text = $(this).data('text');
                    $(this).append('<span>' + text + '</span>');
                });

                $fa.hover(function() {
                    $(this).find('span').stop().slideDown(_settings.speed);
                }, function() {
                    $(this).find('span').stop().slideUp(_settings.speed);
                });
            };

        return this.each(_handler);
    };
    
})(jQuery);