import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  const { handleSearchName, searchName, handleClick, preferences, comparisons,
    columnOptions, handlePreferences } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="Name">
        Name:
        <input
          data-testid="name-filter"
          type="text"
          value={ searchName }
          onChange={ handleSearchName }
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        value={ preferences.column }
        onChange={ handlePreferences }
      >
        {columnOptions.map((column, index) => (
          <option key={ index }>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ preferences.comparison }
        onChange={ handlePreferences }
      >
        {comparisons.map((comparison, index) => (
          <option key={ index }>{comparison}</option>))}
      </select>
      <input
        type="number"
        name="number"
        data-testid="value-filter"
        value={ preferences.number }
        onChange={ handlePreferences }
      />
      <button
        type="button"
        data-testid="button-filter"
        label="filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>

  );
}
export default Filters;
