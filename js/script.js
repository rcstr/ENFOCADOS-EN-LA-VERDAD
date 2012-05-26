$(document).ready(function () {
    var player = document.getElementById('countdown-audio');
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
    })
});