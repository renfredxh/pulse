var pulse = pulse || {};

// The DOM element for a todo item...
pulse.InstrumentView = Backbone.View.extend({

  className: '.instrument',

  // Cache the template function for a single item.
  template: _.template( $('#instrument-template').html() ),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

});
