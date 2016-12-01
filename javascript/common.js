$(document).ready(function() {
   var $skillbar = $(".skillbar");
    
    $skillbar.each(function() {
        console.log($(this).data("percent"));
        $(this).animate({
            width: $(this).data("percent")
        });
    });
});