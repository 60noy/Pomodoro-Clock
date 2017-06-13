import React, { Component } from 'react';
// import Pomodoro from '../../components/Pomodoro';
import Pomodoro from '../../components/Pomodoro';

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    // wanted- the time which the user set at start by the timers
    // current
    this.state = {
      workSeconds: 60,
      breakSeconds: 60,
      workSecondsLeft: 60,
      breakSecondsLeft: 60,
      mode: 'WORK',
      rounds: 0,
      isTick: true,
    };
  }
  componentWillMount() {
    // TODO: add buttons start func and inside the current interval
    const { isTick } = this.state;
    if (isTick) {
      setInterval(() => {
        this.tick();
      }, 1000);
    }

    // this.startTiming();
  }
  // starts the timer
  startTiming = () => {
    // this.interval = this.setInterval(() => {
    //   console.log('1 sec passed');
    // }, 1000);
  }
  //
  tick = () => {
    const { mode, workSecondsLeft, breakSecondsLeft } = this.state;
    if (mode === 'WORK') {
      if (workSecondsLeft === 1) {
        this.toggleMode('BREAK');
      }
      // TODO: check if this is the last second and trigger changeMode function
      // which recieve mode and restart with the new seconds
      this.setState({ workSecondsLeft: workSecondsLeft - 1 });
    } else {
      this.setState({ workSecondsLeft: breakSecondsLeft - 1 });
    }
  }
  // chenged the mode and restarts the counter
  toggleMode = (desiredMode) => {
    if (desiredMode === 'WORK') {
      const { workSeconds, rounds } = this.state;
      this.setState({
        workSecondsLeft: workSeconds,
        mode: 'WORK',
        rounds: rounds + 1,
      });
    } else if (desiredMode === 'BREAK') {
      const { breakSeconds } = this.state;
      this.setState({
        breakSecondsLeft: breakSeconds, mode: 'BREAK',
      });
    } else {
      // stop watch
    }
    // const { workMinutes, breakMinutes, workMinutesLeft, breakMinutesLeft, mode } = this.state;
  }
  render() {
    const { workSeconds, breakSeconds, workSecondsLeft, breakSecondsLeft, mode } = this.state;
    return (
      <div>
        <Pomodoro
          workMinutes={workSeconds / 60}
          breakMinutes={breakSeconds / 60}
          workMinutesLeft={workSecondsLeft / 60}
          breakMinutesLeft={breakSecondsLeft / 60}
          mode={mode}
          onStartButtonClick={this.startTiming}
        />
      </div>
    );
  }
}

export default PomodoroContainer;
