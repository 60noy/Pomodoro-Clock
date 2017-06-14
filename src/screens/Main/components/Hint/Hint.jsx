import React from 'react';
import PropTypes from 'prop-types';
import Headline from 'grommet/components/Headline';

const messages = [
  '',
  'You can do it!',
  'You are halfway through!',
  'Almost there!',
  'Believe in yourself!',
  'Never, never give up!',
  'Set your goals high, and dont stop till you get there',
  'Well done is better than well said.',
  'If you are going through hell, keep going.',
  'You can never quit. Winners never quit, and quitters never win.',
  'Aim for the moon. If you miss, you may hit a star.',
  'The way to get started is to quit talking and begin doing.',
];
const Hint = ({ times }) => (
  <Headline
    margin="medium"
    size="medium"
  >
    {messages[times]}
  </Headline>
);

Hint.propTypes = {
  times: PropTypes.number.isRequired,
};
export default Hint;
