import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Pomodoro from '../../components/Pomodoro';
import ActionButtons from '../../components/ActionButtons';

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    // wanted- the time which the user set at start by the timers
    // current
    this.state = {
      workSeconds: 1500,
      workSecondsLeft: 1500,
      breakSeconds: 120,
      breakSecondsLeft: 120,
      mode: 'WORK',
      rounds: 0,
      isTick: false,
      intervalID: '',
    };
  }
  // starts the timer
  startTimer = () => {
    const { isTick, intervalID } = this.state;
    // checks if there is already an interval and finishes him
    if (intervalID) {
      clearInterval(intervalID);
    }
    // starts new interval and sets its ID in the state
    const newIntervalID = setInterval(() => {
      if (!isTick) { this.tick(); }
    }, 1000);

    this.setState({ isTick: true, intervalID: newIntervalID });
  }
  // stops the timer
  pauseTimer = () => {
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
      const { breakSeconds, workSeconds } = this.state;
      this.setState({ breakSecondsLeft: breakSeconds, isTick: true, mode: 'WORK', workSecondsLeft: workSeconds });
    }
  }
  // ticks every seconds depending on the mode and triggers
  // toggleMode() on the last second
  tick = () => {
    const { mode, workSecondsLeft, breakSecondsLeft, isTick } = this.state;
    if (isTick) {
      // checks if the wanted mode is work and if this is the last second
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
        breakSecondsLeft: breakSeconds,
        mode: 'BREAK',
      });
    } else {
      this.setState({ isTick: false });
    }
    // const { workMinutes, breakMinutes, workMinutesLeft, breakMinutesLeft, mode } = this.state;
  }
  handleUpdateWorkMinutes = (workMinutes) => {
    const { isTick } = this.state;
    if (!isTick && workMinutes > 0) {
      console.log(`updating work minutes to ${workMinutes}`);
      this.setState({
        workSeconds: workMinutes * 60,
        workSecondsLeft: workMinutes * 60,
      });
    }
  }
  handleUpdateBreakMinutes = (breakMinutes) => {
    const { isTick } = this.state;
    if (!isTick && breakMinutes > 0) {
      this.setState({
        breakSeconds: breakMinutes * 60,
        breakSecondsLeft: breakMinutes * 60 });
    }
  }
  render() {
    const { workSeconds, breakSeconds, workSecondsLeft,
      breakSecondsLeft, mode, isTick, rounds } = this.state;
    return (
      <div>
        <Box
          align="center"
        >
          <Headline size="large" strong>
            Pomodoro Clock
          </Headline>
          <Pomodoro
            workSeconds={workSeconds}
            breakSeconds={breakSeconds}
            workSecondsLeft={workSecondsLeft}
            breakSecondsLeft={breakSecondsLeft}
            mode={mode}
            onUpdateWorkMinutes={this.handleUpdateWorkMinutes}
            onUpdateBreakMinutes={this.handleUpdateBreakMinutes}
            isTick={isTick}
          />
          <ActionButtons
            onRestartTimer={this.restartTimer}
            onPauseTimer={this.pauseTimer}
            onStartTimer={this.startTimer}
            onResumeTimer={this.resumeTimer}
            isTick={isTick}
          />
          {rounds > 0 && (
            <Headline
              size="small"
              margin="small"
            >
              {rounds} Rounds already!
          </Headline>)}
        </Box>
      </div>
    );
  }
}

export default PomodoroContainer;
