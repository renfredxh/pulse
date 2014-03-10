var pulse = pulse || {};

var Rhythm = Backbone.Model.extend({

  urlRoot: '/rhythms',

  defaults: {
    playing: false,
  },

  initialize: function() {
  }

});

pulse.Rhythm = new Rhythm();
