var React = require('react');
var Header = require('./header.jsx');
var Laters = require('./laters.jsx')

var ReadLater = React.createClass({

  render: function() {
    return (
      <div className="read-later">
        <Header />
        <div className="row">
          <Laters count={4}/>
        </div>

        <div className="row">
          <Laters count={4}/>
        </div>

    </div>
    );
  }

});

module.exports = ReadLater;
