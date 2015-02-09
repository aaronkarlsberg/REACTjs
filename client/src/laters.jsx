var React = require('react');
var Later = require('./later.jsx');

var Laters = React.createClass({

  render: function() {
    var laters = [];
    for (var i = this.props.count-1; i >= 0; i--) {
      laters.push(<Later name={"Later"+i} />)
    };
    return (
      <div className="laters">
        {laters}
      </div>
    );
  }

});

module.exports = Laters;
