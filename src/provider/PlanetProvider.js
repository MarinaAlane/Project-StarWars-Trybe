import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const context = { data, setData };
  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetProvider;
