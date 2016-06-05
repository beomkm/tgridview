$(document).ready(function(){


$("#list1 li").on("click", function(e){
  $("#sel1").text($(this).text());
});

var grid = new TGridView("sbj-list", ["과목코드", "과목명", "분반"]);


});
