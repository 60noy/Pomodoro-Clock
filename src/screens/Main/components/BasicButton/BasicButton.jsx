import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const BasicButton = ({ onClick, label }) => (
  <Button
    label={label}
    onClick={onClick}
  />
);

BasicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default BasicButton;
