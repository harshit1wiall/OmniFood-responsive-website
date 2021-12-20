$(document).ready(function () {
        strict
    $('.js--section-features').waypoints(function (direction) { 
        if (direction === "down") {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
});
