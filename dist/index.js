// Generated by CoffeeScript undefined
var AutoupdateTime, React, Time, moment;

React = require('react');

Time = require('react-time');

AutoupdateTime = require('react-autoupdate-time');

moment = require('moment');

module.exports = React.createClass({
  displayName: 'SmartTimeAgo',
  getDefaultProps: function() {
    return {
      value: new Date()
    };
  },
  render: function() {
    var thisYear;
    thisYear = moment().year() === moment(this.props.value).year();
    if (2 >= moment().diff(moment(this.props.value), 'weeks')) {
      return this.transferPropsTo(AutoupdateTime(null));
    } else if (thisYear) {
      return this.transferPropsTo(Time({
        "format": "D MMM"
      }));
    } else {
      return this.transferPropsTo(Time({
        "format": "D MMM YYYY"
      }));
    }
  }
});
