
;(function($) {

    'use strict'

    var progressCircle = function() {
        
            $('.piechart').each(function () {
                var $this = $(this);
                var value = Number($this.data("value")) / 100;
                var option;

                option = {
                    strokeWidth: 7.5,
                    trailWidth: 7.5,
                    duration: 1500,
                    text: {
                        value: '0%'
                    },
                    step: function (state, bar) {
                        bar.setText((bar.value() * 100).toFixed(0) + "%");
                    }
                }

                var circle = new ProgressBar.Circle($(this)[0], option);

                $this.waypoint({
                    handler: function (direction) {
                        circle.animate(value);
                    },
                    offset: "75%"
                });
            });
       
    };
 

    $(function() {
    	progressCircle();
    });

})(jQuery);