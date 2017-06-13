import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../BasicButton';

const ActionButtons = ({ onStartTimer, onPauseTimer, onRestartTimer, onResumeTimer, isTick }) => (
  <div>
    <BasicButton
      label={isTick ? 'Restart' : 'Start'}
      onClick={isTick ? onRestartTimer : onStartTimer}
    />
    <BasicButton
      label={isTick ? 'Pause' : 'Resume'}
      onClick={isTick ? onPauseTimer : onResumeTimer}
    />
  </div>
);

ActionButtons.propTypes = {
  onStartTimer: PropTypes.func.isRequired,
  onPauseTimer: PropTypes.func.isRequired,
  onResumeTimer: PropTypes.func.isRequired,
  onRestartTimer: PropTypes.func.isRequired,
  isTick: PropTypes.bool.isRequired,
};
export default ActionButtons;
