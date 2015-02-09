var Header = require('./header.jsx');
var Laters = require('./laters.jsx')

var ReadLater = React.createClass({

  render: function() {
    return (
      <div className="read-later">
        <Header />
        <Laters count={4}/>
        <Laters count={4}/>
      </div>
    );
  }

});

module.exports = ReadLater;
