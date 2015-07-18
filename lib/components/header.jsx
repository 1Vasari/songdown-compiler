'use strict';

var React = require('react');

var tokens = require('../tokens');
var styles = require('../styles');

var Header = React.createClass({

  propTypes: {
    line: React.PropTypes.string.isRequired,
    theme: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      line: '',
      theme: 'default'
    };
  },

  render: function() {
    var header = this.props.line.replace(tokens.ANY_VERSE_HEADER, '') + ':';
    return (
      <div style={styles[this.props.theme].header}>
        {header}
      </div>
    );
  }
});

module.exports = Header;
