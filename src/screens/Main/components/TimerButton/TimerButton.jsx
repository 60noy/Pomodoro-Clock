import React from 'react';
import PropTypes from 'prop-types';
import Substract from 'grommet/components/icons/base/Subtract';
import Add from 'grommet/components/icons/base/Add';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import AdjustmentButton from '../AdjustmentButton';


const TimerButton = ({ minutes, onAddMinutes, onSubstractMinutes, color }) => (
  <Box align="center" direction="row">
    <AdjustmentButton
      icon={<Substract colorIndex={color} size="large" />}
      onClick={onSubstractMinutes}
    />
    <Value
      value={minutes}
      label="Minutes"
      colorIndex={color}
      size="large"
    />
    <AdjustmentButton
      icon={<Add colorIndex={color} size="large" />}
      onClick={onAddMinutes}
    />
  </Box>
);

TimerButton.propTypes = {
  minutes: PropTypes.number.isRequired,
  onSubstractMinutes: PropTypes.func.isRequired,
  onAddMinutes: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
export default TimerButton;
