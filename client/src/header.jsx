var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">Read It Later
                <small>things to read later</small>
            </h1>
        </div>
      </div>
    );
  }

});

module.exports = Header;
