import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimerButton from '../../components/TimerButton';

class TimerButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes,
    };
  }
  // substracts 1 minute to the timers's minutes in state
  handleSubstractMinutes = () => {
    const { minutes } = this.state;
    this.setState({ minutes: minutes - 1 });
  }

  // adds 1 minute to the timers's minutes in state
  handleAddMinutes = () => {
    const { minutes } = this.state;
    this.setState({ minutes: minutes + 1 });
  }

  render() {
    const { minutes } = this.state;
    return (
      <div>
        <TimerButton
          minutes={minutes}
          onSubstractMinutes={this.handleSubstractMinutes}
          onAddMinutes={this.handleAddMinutes}
        />
      </div>
    );
  }
}

TimerButtonContainer.propTypes = {
  minutes: PropTypes.number.isRequired,
};
export default TimerButtonContainer;
