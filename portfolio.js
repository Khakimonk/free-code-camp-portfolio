$(document).ready(function() {
    $('#home-btn').click(function() {
        $('html, body').scrollTop('.main');
    });
    $('#about-btn').click(function() {
        $('html, body').scrollTop('#about');
    });   
});