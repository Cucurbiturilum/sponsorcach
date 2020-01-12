$(document).ready(function () {
    var toggleLike = $('.like');
    var heart = $('.fa-heart');

    toggleLike.click(function () {
        heart.toggleClass('far fa-heart fas fa-heart');
    });

    var countdown = 60;
    $('svg circle').attr('style', 'animation:countdown ' + countdown + 's linear infinite forwards;')


    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            var classToValue = {
                days: Math.floor(distance / (day)),
                hours: Math.floor((distance % (day)) / (hour)),
                minutes: Math.floor((distance % (hour)) / (minute)),
                seconds: Math.floor((distance % (minute)) / second)
            };

            Object.keys(classToValue).forEach(function(className){
                var value = classToValue[className];
                var elements = document.getElementsByClassName(className);
                for(var element of elements){
                    element.innerText = value;
                }
            });

        }, second)
});