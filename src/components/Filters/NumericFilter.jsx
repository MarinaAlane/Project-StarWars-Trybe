import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFilters from '../../hooks/useFilters';

export default function NumericFilter({ available }) {
  const { filters, setFilters } = useFilters();
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState(0);

  function handleAddFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat({
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      }),
    });

    setColumnFilter('');
    setComparisonFilter('');
    setValueFilter(0);
  }

  return (
    <div>
      <label htmlFor="numeric-filter">
        Numeric Filter:
        <select
          data-testid="column-filter"
          onChange={ (event) => setColumnFilter(event.target.value) }
        >
          {available.map((numFilter) => (
            <option key={ numFilter } value={ numFilter }>
              {numFilter}
            </option>))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ (event) => setComparisonFilter(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (event) => setValueFilter(event.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleAddFilter() }
      >
        +
      </button>
    </div>
  );
}

NumericFilter.propTypes = {
  available: PropTypes.arrayOf(PropTypes.string),
}.isRequired;