var Later = require('./later.jsx');

var Laters = React.createClass({

  render: function() {
    var laters = this.props.laters.map(function(later) {
      return(<Later key={later.name} later={later} />)
    }.bind(this));
    return (
      <div className="row">
        {laters}
      </div>
    );
  }

});

module.exports = Laters;
