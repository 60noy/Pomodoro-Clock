import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import TimerButtonContainer from '../../containers/TimerButtonContainer';

const TimerButtonsWrapper =
({ workSeconds, breakSeconds, onUpdateWorkMinutes, onUpdateBreakMinutes, isTick }) => (
  <Box direction="row" alignContent="between">
    <TimerButtonContainer
      minutes={workSeconds / 60}
      color="neutral-1"
      onUpdateMinutes={onUpdateWorkMinutes}
      isTick={isTick}
      type="Work"
    />
    <TimerButtonContainer
      minutes={breakSeconds / 60}
      color="neutral-2"
      onUpdateMinutes={onUpdateBreakMinutes}
      isTick={isTick}
      type="Break"
    />
  </Box>
);

TimerButtonsWrapper.propTypes = {
  workSeconds: PropTypes.number.isRequired,
  breakSeconds: PropTypes.number.isRequired,
  onUpdateBreakMinutes: PropTypes.func.isRequired,
  onUpdateWorkMinutes: PropTypes.func.isRequired,
  isTick: PropTypes.bool.isRequired,
};
export default TimerButtonsWrapper;
