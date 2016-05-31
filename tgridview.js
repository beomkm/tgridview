$(document).ready(function(){

  $("#list1 li").on("click", function(e){
    $("#sel1").text($(this).text());
  });

  var table = $("#subject");
  for(var i=0; i<800; i++) {
    var id = "row"+i;
    var html = `<div class="panel panel-default sbj-row" id="`+id+`">`;
    for(var j=0; j<6; j++) {
      html += `
      <div class="panel panel-default sbj-cell">
        <div class="panel-body sbj-context">`;
      html += id + " col" + j;
      html += `
        </div>
      </div>`;
    }
    html += "</div>"
    table.append(html);
  }

/*
  for(var i=0; i<800; i++)
    $("#subject").append(`
      <div class="panel panel-default" id="row" style="margin:0px">

          <div class="panel panel-default sbj-cell">
            <div class="panel-body sbj-context">
              cewwwwwwwwwwwwww
            </div>
          </div>
          <div class="panel panel-default sbj-cell">
            <div class="panel-body sbj-context">
              cewwwwwwwwwwwwww
            </div>
          </div>

      </div>
    `);
*/

});
