$(document).ready(function () {

// Likes

    var toggleLike = $('.like');
    var heart = $('.fa-heart');

    toggleLike.click(function () {
        heart.toggleClass('far fa-heart fas fa-heart');
    });

// Circle Timer

    var countdown = 60;
    $('svg circle').attr('style', 'animation:countdown ' + countdown + 's linear infinite forwards;')

// Timer

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            var classToValue = {
                days: Math.floor(distance / (day)),
                hours: Math.floor((distance % (day)) / (hour)),
                minutes: Math.floor((distance % (hour)) / (minute)),
                seconds: Math.floor((distance % (minute)) / second)
            };

            Object.keys(classToValue).forEach(function (className) {
                var value = classToValue[className];
                var elements = document.getElementsByClassName(className);
                for (var element of elements) {
                    element.innerText = value;
                }
            });

        }, second)
//Project

    var projectDetailsBtn = $('#details');
    var sponsorsBtn = $('#sponsors');
    var feedbackBtn = $('#feedback');

    var projectDetailsContent = $('.project-details');
    var sponsorsContent = $('.sponsors');
    var feedbackContent = $('.feedback');

    projectDetailsContent.show();
    sponsorsContent.hide();
    feedbackContent.hide();

    projectDetailsBtn.click(function(){
        projectDetailsContent.show();
        sponsorsContent.hide();
        feedbackContent.hide();

        projectDetailsBtn.addClass('active');
        sponsorsBtn.removeClass('active')
        feedbackBtn.removeClass('active');
    });

    sponsorsBtn.click(function(){
        projectDetailsContent.hide();
        sponsorsContent.show();
        feedbackContent.hide();

        projectDetailsBtn.removeClass('active');
        sponsorsBtn.addClass('active')
        feedbackBtn.removeClass('active');
    });

    feedbackBtn.click(function(){
        projectDetailsContent.hide();
        sponsorsContent.hide();
        feedbackContent.show();

        projectDetailsBtn.removeClass('active');
        sponsorsBtn.removeClass('active')
        feedbackBtn.addClass('active');
    });

});