define("history-view",["jquery","underscore","backbone","dispatch"],function(e,t,n,r){var i=n.View.extend({el:"#history",events:{"click .version-link":"setStorageItem"},initialize:function(){r.on("regSection:open:after",this.updateLinks,this),e(".status-list").removeClass("current"),this.$el.find(".status-list[data-base-version="+r.getVersion()+"]").addClass("current"),this.updateLinks()},setStorageItem:function(){sessionStorage.setItem("drawerDefault","history")},updateLinks:function(){var t=r.getOpenSection();this.$el.find(".version-link").each(function(){var n=e(this);n.attr("href",window.APP_PREFIX+t+"/"+n.data("version"))})}});return i});