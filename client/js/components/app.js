(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ReadLater = require('./read-later.jsx')

$(document).ready(function() {
  React.render(React.createElement(ReadLater, null), $('.container')[0]);
})


},{"./read-later.jsx":7}],2:[function(require,module,exports){
var _laters = {};
var LaterStore = {
  laters: function() {
    return _laters;
  },
  triggerChange: function(data) {
    $(this).trigger('change', data);
  },
  onChange: function(callback) {
    $(this).on('change', callback);
  },
  new: function() {
    return {
      name: null,
      url: null
    }
  },
  all: function() {
    $.ajax({
      url: 'http://localhost:3000/laters',
      type: 'GET'
    })
    .done(function(response) {
      _laters = Object.keys(response).map(function(name) {
        return response[name];
      });
      this.triggerChange();
    }.bind(this))
  },
  create: function(data) {
    $.ajax({
      url: 'http://localhost:3000/laters',
      type: 'POST',
      data: data
    })
    .done(function(response) {
      _laters.unshift(response[data.name]);
      this.triggerChange();
    }.bind(this))
  }
}

module.exports = LaterStore;


},{}],3:[function(require,module,exports){
var Header = React.createClass({displayName: "Header",

  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-lg-12"}, 
            React.createElement("h1", {className: "page-header"}, "Read It Later", 
                React.createElement("small", null, "things to read later")
            )
        )
      )
    );
  }

});

module.exports = Header;


},{}],4:[function(require,module,exports){
var LaterStore = require('../js/later-store');

var LaterForm = React.createClass({displayName: "LaterForm",

  render: function() {
    var options = {
      onSubmit: this.createLater,
      url: {type: 'url'}
    }
    return (
      React.createElement(FormFor, {object: LaterStore.new(), options: options, errors: []})
    );
  },
  createLater: function(data) {
    LaterStore.create(data);
  }

});

module.exports = LaterForm;


},{"../js/later-store":2}],5:[function(require,module,exports){
var Later = React.createClass({displayName: "Later",

  render: function() {
    return (
      React.createElement("div", {className: "col-md-3 portfolio-item"}, 
        React.createElement("a", {href: "#"}, 
          React.createElement("img", {className: "img-responsive", src: "http://thecatapi.com/api/images/get?format=src&type=gif", alt: ""}), 
          React.createElement("span", null, this.props.later.name)
        )
      )
    );
  }

});

module.exports = Later;


},{}],6:[function(require,module,exports){
var Later = require('./later.jsx');

var Laters = React.createClass({displayName: "Laters",

  render: function() {
    var laters = this.props.laters.map(function(later) {
      return(React.createElement(Later, {key: later.name, later: later}))
    }.bind(this));
    return (
      React.createElement("div", {className: "row"}, 
        laters
      )
    );
  }

});

module.exports = Laters;


},{"./later.jsx":5}],7:[function(require,module,exports){
var Header = require('./header.jsx');
var Laters = require('./laters.jsx');
var LaterStore = require('../js/later-store');
var LaterForm = require('./later-form.jsx')
var ReadLater = React.createClass({displayName: "ReadLater",
  getInitialState: function() {
    return {
      laters: []
    };
  },
  componentDidMount: function() {
    LaterStore.onChange(function(e, data) {
      this.setState({ laters: LaterStore.laters() })
    }.bind(this))
    LaterStore.all();
  },
  render: function() {
    return (
      React.createElement("div", {className: "read-later"}, 
        React.createElement(Header, null), 
        React.createElement(LaterForm, null), 
        React.createElement(Laters, {laters: this.state.laters})
      )
    );
  }

});

module.exports = ReadLater;


},{"../js/later-store":2,"./header.jsx":3,"./later-form.jsx":4,"./laters.jsx":6}]},{},[1]);
