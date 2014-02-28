var pulse = pulse || {};

pulse.NoteView = Backbone.View.extend({

  className: 'note',

  // Cache the template function for a single item.
  template: _.template( $('#note-template').html() ),

  events: {
    'click .note': 'deactivate'
  },

  render: function() {
    this.$el.append( this.template( this.model.toJSON() ) );
    return this;
  },

});
