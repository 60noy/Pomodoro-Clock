import React from 'react';
import PropTypes from 'prop-types';
// import TimerButton from '../TimerButton';
import TimerButtonContainer from '../../containers/TimerButtonContainer';
import Clock from '../Clock';
import StartButton from '../StartButton';

const Pomodoro =
({ workMinutes, breakMinutes, workMinutesLeft, breakMinutesLeft,
  onStartButtonClick, mode }) => (
    <div>
      <TimerButtonContainer
        minutes={workMinutes}
      />
      <TimerButtonContainer
        minutes={breakMinutes}
      />
      <Clock
        minutes={mode === 'WORK' ? workMinutesLeft : breakMinutesLeft}
        mode={mode}
        maxMinutes={mode === 'WORK' ? workMinutes : breakMinutes}
      />
      <StartButton onClick={onStartButtonClick} />
    </div>
);

Pomodoro.propTypes = {
  workMinutes: PropTypes.number.isRequired,
  breakMinutes: PropTypes.number.isRequired,
  workMinutesLeft: PropTypes.number.isRequired,
  breakMinutesLeft: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  onStartButtonClick: PropTypes.func.isRequired,
};
export default Pomodoro;
