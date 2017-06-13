import React from 'react';
import PropTypes from 'prop-types';
import TimerButtonContainer from '../../containers/TimerButtonContainer';
import Clock from '../Clock';

const Pomodoro = ({ workSeconds, breakSeconds, workSecondsLeft, breakSecondsLeft, mode }) => (
  <div>
    <TimerButtonContainer
      minutes={workSeconds}
    />
    <TimerButtonContainer
      minutes={breakSeconds}
    />
    <Clock
      seconds={mode === 'WORK' ? workSecondsLeft : mode === 'BREAK' && breakSecondsLeft}
      mode={mode}
      maxMinutes={mode === 'WORK' ? workSeconds : mode === 'BREAK' && breakSeconds}
    />
  </div>
);

Pomodoro.propTypes = {
  workSeconds: PropTypes.number.isRequired,
  breakSeconds: PropTypes.number.isRequired,
  workSecondsLeft: PropTypes.number.isRequired,
  breakSecondsLeft: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
};
export default Pomodoro;
