var Later = React.createClass({

  render: function() {
    return (
      <div className="col-md-3 portfolio-item">
        <a href="#">
          <img className="img-responsive" src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="" />
          <span>{this.props.name}</span>
        </a>
      </div>
    );
  }

});

module.exports = Later;
