(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ReadLater = require('./read-later.jsx')

$(document).ready(function() {
  React.render(React.createElement(ReadLater, null), $('.container')[0]);
})


},{"./read-later.jsx":5}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
var Later = React.createClass({displayName: "Later",

  render: function() {
    return (
      React.createElement("div", {className: "col-md-3 portfolio-item"}, 
        React.createElement("a", {href: "#"}, 
          React.createElement("img", {className: "img-responsive", src: "http://thecatapi.com/api/images/get?format=src&type=gif", alt: ""}), 
          React.createElement("span", null, this.props.name)
        )
      )
    );
  }

});

module.exports = Later;


},{}],4:[function(require,module,exports){
var Later = require('./later.jsx');

var Laters = React.createClass({displayName: "Laters",

  render: function() {
    var laters = [];
    for (var i = this.props.count-1; i >= 0; i--) {
      laters.push(React.createElement(Later, {key: Math.random(), name: "Later"+i}))
    };
    return (
      React.createElement("div", {className: "row"}, 
        laters
      )
    );
  }

});

module.exports = Laters;


},{"./later.jsx":3}],5:[function(require,module,exports){
var Header = require('./header.jsx');
var Laters = require('./laters.jsx')

var ReadLater = React.createClass({displayName: "ReadLater",

  render: function() {
    return (
      React.createElement("div", {className: "read-later"}, 
        React.createElement(Header, null), 
        React.createElement(Laters, {count: 4}), 
        React.createElement(Laters, {count: 4})
      )
    );
  }

});

module.exports = ReadLater;


},{"./header.jsx":2,"./laters.jsx":4}]},{},[1]);
