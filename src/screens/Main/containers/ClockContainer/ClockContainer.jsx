import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleStopWatch = () => {
    // stop timer
  }
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}
ClockContainer.propTypes = {
};
