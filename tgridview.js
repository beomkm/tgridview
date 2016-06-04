var TGridView = function(id, attrs)
{
  this.init(id, attrs);
}

TGridView.prototype = {
  init : function(id, attrs)
  {
    var html = "";
    var attrCount = attrs.length;

    html += "<table class=\"table table-hover table-frame noselect\"><thead><tr>";
    for(var i=0; i<attrCount; i++) {
      html += "<th>" + attrs[i] + "</th>";
    }
    html += "</tr></thead><tbody></tbody></table>";

    $("#"+id).append(html);
    html = "";
    var start = performance.now();
    for(var i=0; i<800; i++) {
      html += "<tr id=row"+i+">";
      for(var j=0; j<attrCount; j++) {
        html += "<td>Cell</td>";
      }
      html += "</tr>";
    }
    $("#"+id+" tbody").append(html);
    console.log(performance.now()-start);
  }
}

TGridView.prototype.constructor = TGridView;
