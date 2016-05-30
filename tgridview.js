$(document).ready(function(){
  $("#list1 li").on("click", function(e){
    $("#sel1").text($(this).text());
  });
});
