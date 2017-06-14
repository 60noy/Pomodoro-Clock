import React from 'react';
import PropTypes from 'prop-types';
import TimerButtonContainer from '../../containers/TimerButtonContainer';

const TimerButtonsWrapper =
({ workSeconds, breakSeconds, onUpdateWorkMinutes, onUpdateBreakMinutes, isTick }) => (
  <div>
    <TimerButtonContainer
      minutes={workSeconds / 60}
      color="neutral-1"
      onUpdateMinutes={onUpdateWorkMinutes}
      isTick={isTick}
    />
    <TimerButtonContainer
      minutes={breakSeconds / 60}
      color="neutral-2"
      onUpdateMinutes={onUpdateBreakMinutes}
      isTick={isTick}
    />
  </div>
);

TimerButtonsWrapper.propTypes = {
  workSeconds: PropTypes.number.isRequired,
  breakSeconds: PropTypes.number.isRequired,
  onUpdateBreakMinutes: PropTypes.func.isRequired,
  onUpdateWorkMinutes: PropTypes.func.isRequired,
  isTick: PropTypes.bool.isRequired,
};
export default TimerButtonsWrapper;
