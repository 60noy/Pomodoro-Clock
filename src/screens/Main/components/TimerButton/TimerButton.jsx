import React from 'react';
import PropTypes from 'prop-types';
import Substract from 'grommet/components/icons/base/Subtract';
import Add from 'grommet/components/icons/base/Add';
import Value from 'grommet/components/Value';
import AdjustmentButton from '../AdjustmentButton';


const TimerButton = ({ minutes, onAddMinutes, onSubstractMinutes, color }) => (
  <div>
    <AdjustmentButton
      icon={<Substract colorIndex={color} />}
      onClick={onSubstractMinutes}
    />
    <Value
      value={minutes}
      label="Minutes"
      colorIndex={color}
      size="medium"
    />
    <AdjustmentButton
      icon={<Add colorIndex={color} />}
      onClick={onAddMinutes}
    />
  </div>
);

TimerButton.propTypes = {
  minutes: PropTypes.number.isRequired,
  onSubstractMinutes: PropTypes.func.isRequired,
  onAddMinutes: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
export default TimerButton;
