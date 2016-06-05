var TGridView = function(id, attrs)
{
  this.selected = null;
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

    for(var i=0; i<20; i++) {
      html += "<tr class=\"row-body\">";
      for(var j=0; j<attrCount; j++) {
        html += "<td>Cell</td>";
      }
      html += "</tr>";
    }
    $("#"+id+" tbody").append(html);

    $("#"+id+" .row-body").on("click", {ctx:this}, this.onRowSelected);
  },

  onRowSelected : function(e)
  {
    var ctx = e.data.ctx;
    if(ctx.selected != null) ctx.selected.removeClass("row-selected");
    $(e.currentTarget).addClass("row-selected");
    ctx.selected = $(e.currentTarget);
  }
}

TGridView.prototype.constructor = TGridView;
