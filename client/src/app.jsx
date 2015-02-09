var React = require('react')
var ReadLater = require('./read-later.jsx')

$(document).ready(function() {
  React.render(<ReadLater />, $('.container')[0]);
})
