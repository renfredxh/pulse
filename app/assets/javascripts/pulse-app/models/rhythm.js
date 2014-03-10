var pulse = pulse || {};

pulse.Rhythm = Backbone.Model.extend({

  urlRoot: '/rhythms',

  defaults: {
    playing: false,
  },

  initialize: function() {
  }

});
