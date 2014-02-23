var pulse = pulse || {};

// Our overall **AppView** is the top-level piece of UI.
pulse.AppView = Backbone.View.extend({

  el: '#kit',

  initialize: function() {
    this.listenTo(pulse.Instruments, 'add', this.addOne);
    this.listenTo(pulse.Instruments, 'reset', this.addAll);
  },

  addOne: function(instrument) {
    var view = new pulse.InstrumentView({ model: instrument });
    this.$el.append( view.render().el );
  },

  // Add all items in the **Todos** collection at once.
  addAll: function() {
    this.$el.html('');
    pulse.Instruments.each(this.addOne, this);
  }

});
