define("sidebar-module-view",["jquery","underscore","backbone","reg-model"],function(e,t,n,r){var i=n.View.extend({initialize:function(){var e;this.model={};for(e in this.options)this.options.hasOwnProperty(e)&&(this.model[e]=this.options[e]);return this.model.content=r.get(this.model.id,this.render),this},render:function(){this.$el.html(this.model.content)}});return i});