var Later = require('./later.jsx');

var Laters = React.createClass({

  render: function() {
    var laters = Object.keys(this.props.laters).map(function(laterName) {
      return(<Later key={laterName} later={this.props.laters[laterName]} />)
    }.bind(this));
    return (
      <div className="row">
        {laters}
      </div>
    );
  }

});

module.exports = Laters;
