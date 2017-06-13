import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const StartButton = ({ onClick }) => (
  <div>
    <Button
      label="start"
      onClick={() => onClick}
    />
  </div>
);

StartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default StartButton;
