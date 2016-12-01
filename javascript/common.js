$(document).ready(function() {
    var $window = $(window),
        $home = $('#home');
    
    $(window).scroll(function() {
        var yPos = -($window.scrollTop() / 10);
        var coords = '50%' + yPos + 'px';
        
        $home.css({
            backgroundPosition: coords
        });
    });
    
   var $skillbar = $(".skillbar");
    
    $skillbar.each(function() {
        $(this).animate({
            width: $(this).data("percent")
        });
    });
    
    var currentIndex = 0,
        $items = $('#slider .pdf'),
        $length = $items.length,
        $prev = $('#prev'),
        $next = $('#next');
    
    console.log($length);
    
    function showItem() {
        var $item = $('#slider .pdf').eq(currentIndex);
        $items.hide();
        $item.css('display', 'inline-block');
    }
    
    $next.click(function() {
       currentIndex += 1;
        if (currentIndex > $length - 1) {
            currentIndex = 0;
        }
        
        showItem();
    });
    
    $prev.click(function() {
       currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = $length - 1;
        }
        showItem();
    });
    
    
});