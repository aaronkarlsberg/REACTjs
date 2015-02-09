var _laters = {};
var LaterStore = {
  laters: function() {
    return _laters;
  },
  triggerChange: function(data) {
    $(this).trigger('change', data);
  },
  onChange: function(callback) {
    $(this).on('change', callback);
  },
  new: function() {
    return {
      name: null,
      url: null
    }
  },
  all: function() {
    $.ajax({
      url: 'http://localhost:3000/laters',
      type: 'GET'
    })
    .done(function(response) {
      _laters = Object.keys(response).map(function(name) {
        return response[name];
      });
      this.triggerChange();
    }.bind(this))
  },
  create: function(data) {
    $.ajax({
      url: 'http://localhost:3000/laters',
      type: 'POST',
      data: data
    })
    .done(function(response) {
      _laters.unshift(response[data.name]);
      this.triggerChange();
    }.bind(this))
  }
}

module.exports = LaterStore;
