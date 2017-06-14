import React from 'react';
import PropTypes from 'prop-types';
import TimerButtonsWrapper from '../TimerButtonsWrapper';
import Clock from '../Clock';

const Pomodoro = ({ workSeconds, breakSeconds, workSecondsLeft, breakSecondsLeft, mode,
   onUpdateBreakMinutes, onUpdateWorkMinutes, isTick }) => (
     <div>
       <TimerButtonsWrapper
         workSeconds={workSeconds}
         breakSeconds={breakSeconds}
         onUpdateBreakMinutes={onUpdateBreakMinutes}
         onUpdateWorkMinutes={onUpdateWorkMinutes}
         isTick={isTick}
       />
       <Clock
         seconds={mode === 'WORK' ? workSecondsLeft : mode === 'BREAK' && breakSecondsLeft}
         mode={mode}
         maxMinutes={mode === 'WORK' ? workSeconds * 60 : mode === 'BREAK' && breakSeconds * 60}
       />
     </div>
);

Pomodoro.propTypes = {
  workSeconds: PropTypes.number.isRequired,
  breakSeconds: PropTypes.number.isRequired,
  workSecondsLeft: PropTypes.number.isRequired,
  breakSecondsLeft: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  onUpdateBreakMinutes: PropTypes.func.isRequired,
  onUpdateWorkMinutes: PropTypes.func.isRequired,
  isTick: PropTypes.bool.isRequired,
};
export default Pomodoro;
