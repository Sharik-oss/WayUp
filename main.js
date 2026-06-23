$(function () {
    function checkScrollAnimations() {
        var topOfWindow = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('#learn .section-title').each(function () {
            var imagePos = $(this).offset().top;
            if (imagePos < topOfWindow + windowHeight - 100) {
                $(this).addClass("fadeInRight");
            }
        });

        $('.future.animated').each(function () {
            var imagePos = $(this).offset().top;
            if (imagePos < topOfWindow + windowHeight - 100) {
                $(this).addClass("fadeInUp");
            }
        });
    }

    $(window).on('scroll', checkScrollAnimations);

    checkScrollAnimations();
});