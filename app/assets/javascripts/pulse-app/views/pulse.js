var pulse = pulse || {};

// Our overall **AppView** is the top-level piece of UI.
pulse.AppView = Backbone.View.extend({

  el: '#kit',

  initialize: function() {
    this.listenTo(pulse.Kit, 'add', this.addOne);
    this.listenTo(pulse.Kit, 'reset', this.addAll);
  },

  addOne: function(instrument) {
    var view = new pulse.InstrumentView({ model: instrument });
    this.$el.append( view.render().el );
  },

  // Add all instruments in the Kit collection at once.
  addAll: function() {
    this.$el.html('');
    pulse.Kit.each(this.addOne, this);
  }

});
