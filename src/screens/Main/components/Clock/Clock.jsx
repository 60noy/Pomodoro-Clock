import React from 'react';
import PropTypes from 'prop-types';
import Meter from 'grommet/components/Meter';

const Clock = ({ minutes, maxMinutes, mode }) => (
  <Meter
    value={minutes}
    label={`${Math.round(minutes)} : ${Math.floor(minutes / 60)}`}
    colorIndex={mode === 'work' ? 'graph-1' : 'graph-2'}
    type="circle"
    max={maxMinutes}
  />
);

Clock.propTypes = {
  minutes: PropTypes.number.isRequired,
  maxMinutes: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
};
export default Clock;
