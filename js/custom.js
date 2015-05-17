// show list in the text area
  function showSection(div_id) {
    $(document).ready(function(){
    //$("#showHintBtn").click(function(){
      //$(div_id).show(1000);
    //});
    if (false == $(div_id).is(':visible')) {
        $(div_id).show(1000);
    }
    else {
        $(div_id).hide(1000);
    }
  });
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
