define("toc-view",["jquery","underscore","backbone","dispatch","regs-helpers"],function(e,t,n,r,i){var s=n.View.extend({el:"#table-of-contents",events:{"click a":"sendClickEvent"},initialize:function(){var e=r.getOpenSection();r.on("regSection:open",this.setActive,this),typeof e!="undefined"&&this.setActive(e),r.hasPushState===!1&&(this.events={})},setActive:function(e){return this.$el.find(".current").removeClass("current"),this.$el.find("a[data-section-id="+i.findBaseSection(e)+"]").addClass("current"),this},sendClickEvent:function(t){t.preventDefault();var n=e(t.currentTarget).data("section-id");r.trigger("regSection:open",n,{id:n},"regSection")},scrollToActive:function(){var e=document.querySelectorAll("#table-of-contents .current");e[0]&&e[0].scrollIntoView()}});return s});