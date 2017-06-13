import React, { Component } from 'react';
// import Pomodoro from '../../components/Pomodoro';
import Pomodoro from '../../components/Pomodoro';
import ActionButtons from '../../components/ActionButtons';

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    // wanted- the time which the user set at start by the timers
    // current
    this.state = {
      workSeconds: 2,
      breakSeconds: 3,
      workSecondsLeft: 2,
      breakSecondsLeft: 3,
      mode: 'WORK',
      rounds: 0,
      isTick: true,
    };
  }
  componentWillMount() {
    // TODO: add buttons start func and inside the current interval
    const { isTick } = this.state;
    // ticks every second if isTick is true
    if (isTick) {
      setInterval(() => {
        this.tick();
      }, 1000);
    }
  }
  // starts the timer
  startTimer = () => {
    this.setState({ isTick: true });
  }
  // stops the timer
  pauseTimer = () => {
    console.log('stops');
    this.setState({ isTick: false });
  }
  // resumes the timer with the current mode
  resumeTimer = () => {
    this.setState({ isTick: true });
  }
  // restarts the timer with the work mode
  restartTimer = () => {
    const { mode } = this.state;
    if (mode === 'WORK') {
      const { workSeconds } = this.state;
      this.setState({ workSecondsLeft: workSeconds, isTick: true });
    } else if (mode === 'BREAK') {
      const { breakSeconds } = this.state;
      this.setState({ breakSecondsLeft: breakSeconds, isTick: true, mode: 'WORK' });
    }
  }
  // ticks every seconds depending on the mode and triggers
  // toggleMode() on the last second
  tick = () => {
    const { mode, workSecondsLeft, breakSecondsLeft, isTick } = this.state;
    // checks if the wanted mode is work and if this is the last second
    if (isTick) {
      if (mode === 'WORK') {
        if (workSecondsLeft === 1) {
          this.toggleMode('BREAK');
        } else {
          this.setState({ workSecondsLeft: workSecondsLeft - 1 });
        }
        // checks if the wanted mode is break and if this is the last second
      } else if (mode === 'BREAK') {
        if (breakSecondsLeft === 1) {
          this.toggleMode('WORK');
        } else {
          this.setState({ breakSecondsLeft: breakSecondsLeft - 1 });
        }
      }
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
      this.setState({ isTick: false });
    }
    // const { workMinutes, breakMinutes, workMinutesLeft, breakMinutesLeft, mode } = this.state;
  }
  render() {
    const { workSeconds, breakSeconds, workSecondsLeft,
      breakSecondsLeft, mode, isTick } = this.state;
    return (
      <div>
        <Pomodoro
          workSeconds={workSeconds}
          breakSeconds={breakSeconds}
          workSecondsLeft={workSecondsLeft}
          breakSecondsLeft={breakSecondsLeft}
          mode={mode}

        />
        <ActionButtons
          onRestartTimer={this.restartTimer}
          onPauseTimer={this.pauseTimer}
          onStartTimer={this.startTimer}
          onResumeTimer={this.resumeTimer}
          isTick={isTick}
        />
      </div>
    );
  }
}

export default PomodoroContainer;
