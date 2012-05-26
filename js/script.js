$(document).ready(function () {
    var player = document.getElementById('countdown-audio'),
        countdownHtml = '<span id=\"countdown-time\"></span>';
    $('.open-countdown').click(function () {
        $('#countdown-time').countDown({
            callBack:function () {
                player.pause();
                player.currentTime = 0;
            }
        });
        player.play();
    });

    $('#countdown').on('hide', function () {
        player.pause();
        player.currentTime = 0;
        $('#countdown-time').remove();
        $('.modal-body h1').append(countdownHtml);
    })


    $('.add-1').click(function() {
       var val = parseFloat($('.counter-1').text()) + 1;
       $('.counter-1').text(val);
    });

    $('.add-2').click(function() {
       var val = parseFloat($('.counter-2').text()) + 1;
       $('.counter-2').text(val);
    });

});