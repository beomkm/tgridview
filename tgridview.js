var TGridView = function(id, attrs)
{
  this.selected = null;
  this.id = id;
  this.attrs = attrs;
  this.attrCount = attrs.length;

  this.init();
}

TGridView.prototype = {
  init : function()
  {
    //$("thead th").width

    var html = "";
    var width;

    //draw table header
    html += "<table class=\"table table-hover table-frame noselect\"><thead><tr>";
    for(var i=0; i<this.attrCount; i++) {
      width = 100/this.attrCount+"%"
      html += "<th width="+width+">" + this.attrs[i] + "</th>";
    }
    html += "</tr></thead><tbody></tbody></table>";
    $("#"+this.id).append(html);

    $("#"+this.id).on("click", ".row-body", {ctx:this}, this.onRowSelected);
  },

  onRowSelected : function(e)
  {
    var ctx = e.data.ctx;
    if(ctx.selected != null) ctx.selected.removeClass("row-selected");
    $(e.currentTarget).addClass("row-selected");
    ctx.selected = $(e.currentTarget);
  },

  addRow : function(data)
  {
    if(data.length != this.attrCount) throw new Error("Mismatch of attributes.");

    var html = "<tr class=\"row-body\">";
    var width;

    for(var i=0; i<this.attrCount; i++) {
      width = 100/this.attrCount+"%";
      width = "200px";
      html += "<td width="+width+">"+data[i]+"</td>";
    }
    html += "</tr>";
    $("#"+this.id+" tbody").append(html);
  }
}

TGridView.prototype.constructor = TGridView;
