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
  componentWillReceiveProps(nextProps) {
    if (nextProps.minutes !== this.state.minutes) {
      return true;
    }
    return false;
  }
  // substracts 1 minute to the timers's minutes in state
  handleSubstractMinutes = () => {
    let { minutes } = this.state;
    if (minutes > 1 && !this.props.isTick) {
      console.log(`substract minutes from${this.state.minutes}`);
      minutes -= 1;
      this.setState({ minutes });
      this.props.onUpdateMinutes(minutes);
    }
  }

  // adds 1 minute to the timers's minutes in state
  handleAddMinutes = () => {
    let { minutes } = this.state;
    if (minutes > 1 && !this.props.isTick) {
      minutes += 1;
      this.setState({ minutes });
      this.props.onUpdateMinutes(minutes);
    }
  }

  render() {
    const { minutes } = this.state;
    return (
      <TimerButton
        minutes={minutes}
        onSubstractMinutes={this.handleSubstractMinutes}
        onAddMinutes={this.handleAddMinutes}
        color={this.props.color}
      />
    );
  }
}

TimerButtonContainer.propTypes = {
  minutes: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onUpdateMinutes: PropTypes.func.isRequired,
  isTick: PropTypes.bool.isRequired,
};
export default TimerButtonContainer;
