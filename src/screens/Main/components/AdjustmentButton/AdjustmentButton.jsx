import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const AdjustmentButton = ({ icon, onClick }) => (
  <Button
    icon={icon}
    onClick={onClick}
  />
);

AdjustmentButton.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default AdjustmentButton;
