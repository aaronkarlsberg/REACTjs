var LaterStore = {
  triggerChange: function(data) {
    $(this).trigger('change', data);
  },
  onChange: function(callback) {
    $(this).on('change', callback);
  },
  all: function() {
    $.ajax({
      url: 'http://localhost:3000/laters',
      type: 'GET'
    })
    .done(function(response) {
      this.triggerChange(response);
    }.bind(this))
  }
}

module.exports = LaterStore;
