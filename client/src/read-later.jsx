var Header = require('./header.jsx');
var Laters = require('./laters.jsx');
var LaterStore = require('../js/later-store');

var ReadLater = React.createClass({
  getInitialState: function() {
    return {
      laters: []
    };
  },
  componentDidMount: function() {
    LaterStore.onChange(function(e, data) {
      this.setState({ laters: data })
    }.bind(this))
    LaterStore.all();
  },
  render: function() {
    return (
      <div className="read-later">
        <Header />
        <Laters laters={this.state.laters} />
      </div>
    );
  }

});

module.exports = ReadLater;
