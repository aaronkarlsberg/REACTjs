var LaterStore = require('../js/later-store');

var LaterForm = React.createClass({

  render: function() {
    var options = {
      onSubmit: this.createLater,
      url: {type: 'url'}
    }
    return (
      <FormFor object={LaterStore.new()} options={options} errors={[]}/>
    );
  },
  createLater: function(data) {
    LaterStore.create(data);
  }

});

module.exports = LaterForm;
