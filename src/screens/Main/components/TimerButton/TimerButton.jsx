import React from 'react';
import PropTypes from 'prop-types';
import Substract from 'grommet/components/icons/base/Subtract';
import Add from 'grommet/components/icons/base/Add';
import Value from 'grommet/components/Value';
import AdjustmentButton from '../AdjustmentButton';


const TimerButton = ({ minutes, onAddMinutes, onSubstractMinutes }) => (
  <div>
    <AdjustmentButton
      icon={<Substract colorIndex="accent-1" />}
      onClick={onSubstractMinutes}
    />
    <Value
      value={minutes}
      label="Minutes"
      colorIndex="accent-1"
      size="medium"
    />
    <AdjustmentButton
      icon={<Add colorIndex="accent-1" />}
      onClick={onAddMinutes}
    />
  </div>
);

TimerButton.propTypes = {
  minutes: PropTypes.number.isRequired,
  onSubstractMinutes: PropTypes.func.isRequired,
  onAddMinutes: PropTypes.func.isRequired,
};
export default TimerButton;
