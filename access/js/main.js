$(document).ready(function () {
    var toggleLike = $('.like');
    var heart = $('.fa-heart');

    toggleLike.click(function () {
        heart.toggleClass('far fa-heart fas fa-heart');
    });

    var countdown = 60;
    $('svg circle').attr('style', 'animation:countdown ' + countdown + 's linear infinite forwards;')

});