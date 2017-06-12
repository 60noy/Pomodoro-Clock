import React from 'react';
import PropTypes from 'prop-types';
import Meter from 'grommet/components/Meter';

const Clock = ({ seconds, mode }) => (
  <div>
    <Meter
      value={seconds / 60}
      label={'Minutes'}
      colorIndex={mode === 'work' ? 'graph-1' : 'graph-2'}
      type="circle"
    />
  </div>
);

Clock.propTypes = {
  seconds: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
};
export default Clock;
