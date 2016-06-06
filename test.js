$(document).ready(function(){


$("#list1 li").on("click", function(e){
  $("#sel1").text($(this).text());
});

var grid = new TGridView("sbj-list", ["a", "b", "c", "d", "e"]);

for(var i=0; i<20; i++) {
  grid.addRow([i+",0",i+",1",i+",2", i+",3", i+",4"]);
}



});
