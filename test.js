$(document).ready(function(){


$("#list1 li").on("click", function(e){
  $("#sel1").text($(this).text());
});

var grid = new TGridView("sbj-list", ["과목코드", "과목명", "분반"]);

for(var i=0; i<20; i++) {
  grid.addRow([i+",1",i+",2",i+",3"]);
}




});
