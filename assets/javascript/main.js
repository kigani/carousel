(function(){
    "use strict";
    window.onload = function () {
        var carousel = new MainCarousel({
            mode: "slide",
            userControl: true,
            autoPlay: {enabled: false, speed: 2000},
            infiniteLoop: true
        });
    }
})();
