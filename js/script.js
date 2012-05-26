$(document).ready(function () {
    var player = document.getElementById('countdown-audio');
    $('.open-countdown').click(function () {
        $('#countdown-time').countDown({
            callBack: function() {
                player.stop();
            }
        });
        player.play();
    });
});