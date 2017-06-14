import React from 'react';
import PropTypes from 'prop-types';
import Meter from 'grommet/components/Meter';

const Clock = ({ seconds, maxMinutes, mode }) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds - (minutes * 60);
  return (<Meter
    value={seconds * 60}
    label={`${minutes} : ${secondsLeft}`}
    colorIndex={mode === 'WORK' ? 'neutral-1' : mode === 'BREAK' && 'neutral-2'}
    type="circle"
    max={maxMinutes}
  />);
};

Clock.propTypes = {
  seconds: PropTypes.number.isRequired,
  maxMinutes: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
};
export default Clock;
