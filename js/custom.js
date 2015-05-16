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
