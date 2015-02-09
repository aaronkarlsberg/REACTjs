var React = require('react');
var Later = require('./later.jsx');

var Laters = React.createClass({

  render: function() {
    var laters = [];
    for (var i = this.props.count-1; i >= 0; i--) {
      laters.push(<Later key={Math.random()} name={"Later"+i} />)
    };
    return (
      <div className="row">
        {laters}
      </div>
    );
  }

});

module.exports = Laters;
