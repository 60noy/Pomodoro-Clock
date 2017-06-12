import React, { Component } from 'react';
import TimerButtonContainer from './containers/TimerButtonContainer';
import Clock from './components/Clock';
// gets the minutes of work and break and the current mode and returns
// the minutes of the current mode
const minutesToSeconds = (workMinutes, breakMinutes, mode) => {
  if (mode === 'WORK') {
    return workMinutes / 60;
  }
  return breakMinutes / 60;
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workMinutes: 25,
      currentWorkMinutes: 0,
      breakMinutes: 5,
      currentBreakMinutes: 0,
      mode: 'WORK',
    };
  }
  render() {
    const { workMinutes, breakMinutes, mode } = this.state;
    return (
      <div>
        <TimerButtonContainer
          minutes={workMinutes}
        />
        <TimerButtonContainer
          minutes={breakMinutes}
        />
        <Clock
          seconds={minutesToSeconds(workMinutes, breakMinutes, mode)}
          mode={mode}
        />
      </div>
    );
  }
}

export default Main;
