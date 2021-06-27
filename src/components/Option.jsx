import React from 'react';
import PropTypes from 'prop-types';

export default function Option({ value }) {
  return (
    <option value={ value }>{value}</option>
  );
}

Option.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string,
}.isRequired;
