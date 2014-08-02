// Generated by CoffeeScript undefined
var Time;

Time = require('react-time');

module.exports = React.createClass({
  displayName: 'Time',
  render: function() {
    var thisYear;
    thisYear = moment().year() === moment(this.props.value).year();
    if (2 >= moment().diff(moment(this.props.value), 'weeks')) {
      return this.transferPropsTo(Time({
        "relative": true,
        "autoUpdate": true
      }));
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
