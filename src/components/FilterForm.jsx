import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/context';

export default function FilterForm() {
  const { filters, setFilters, columnFiltersState } = useContext(StarwarsContext);
  const [filterNumeric, setFilter] = useState({
    column: 'population',
    comparison: 'maior',
    value: 0,
  });
  const { filterByName } = filters;
  const { name } = filterByName;

  const handleNameInput = ({ target }) => {
    setFilters((pastState) => ({
      ...pastState,
      filterByName: {
        name: target.value,
      },
    }));
  };

  const handleFilters = ({ target }) => {
    const { id, value } = target;
    setFilter((pastState) => ({
      ...pastState,
      [id]: value,
    }));
  };

  const handleFiltersButton = () => {
    setFilters((pastState) => ({
      ...pastState,
      filterByNumericValues: [...pastState.filterByNumericValues, filterNumeric],
    }));
  };

  const filterFilters = () => {
    let usedList = columnFiltersState;
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column }) => {
      usedList = usedList.filter((filter) => filter !== column);
    });
    return usedList.map((column) => (
      <option key={ column } value={ column }>
        {column}
      </option>));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleNameInput }
      />
      <div>
        <select
          data-testid="column-filter"
          id="column"
          value={ filterNumeric.column }
          onChange={ handleFilters }
        >
          {filterFilters()}
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ filterNumeric.comparison }
          onChange={ handleFilters }
        >
          <option value="maior">maior que</option>
          <option value="menor">menor que</option>
          <option value="igual">igual a</option>
        </select>
        <input
          type="number"
          id="value"
          value={ filterNumeric.value }
          onChange={ handleFilters }
          data-testid="value-filter"
        />
        <button
          onClick={ handleFiltersButton }
          type="button"
          data-testid="button-filter"
        >
          Adicionar filtro
        </button>
      </div>
    </div>
  );
}
