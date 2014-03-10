var pulse = pulse || {};

pulse.NoteView = Backbone.View.extend({

  className: 'note',

  // Cache the template function for a single item.
  template: _.template( $('#note-template').html() ),

  initialize: function() {
    this.model.on('change', this.render, this);
    this.model.on('play', this.play, this);
    this.model.on('destroy', this.remove, this);
  },

  events: {
    'click .note-inner': 'toggleActive'
  },

  render: function() {
    this.$el.html('');
    this.$el.append( this.template( this.model.toJSON() ) );
    return this;
  },

  toggleActive: function() {
    // Toggle the active status of a note
    var current = this.model.get('active');
    this.model.set('active', !current);
  },

  play: function(){
    if (this.model.get('active')) {
     var opacity = this.$el.css('opacity');
     this.$el.fadeTo(100, 1).fadeTo(100, opacity);
    }
  }
});
