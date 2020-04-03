var windowHeight = window.innerHeight;
var windowWidht = window.innerWidth;

setInterval(function () {
    var pahulja = $('.first').clone().removeClass('first');
    var randomNo = Math.floor(Math.random() * windowWidht);
    pahulja.css('left', randomNo).css('top', '-10px').css('display', 'inline');
    pahulja.appendTo('body').animate({
        top: windowHeight
    }, {
        duration: 8000,
        done: function () {
            pahulja.remove();
        }
    })
}, 400);
