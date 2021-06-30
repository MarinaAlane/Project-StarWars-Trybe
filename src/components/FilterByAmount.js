import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByAmount() {
  const { data, filters, setFilters } = useContext(PlanetContext);
  const [value, setValue] = useState(0);
  const [comp, setComp] = useState('maior que');
  const [type, setType] = useState('rotation_period');
  const [filtredTypes, setFiltredTypes] = useState([]);

  const renderDropdown = () => {
    function regexIsNumeric(str) {
      const er = /^[0-9]+$/;
      return (er.test(str));
    }

    const names = [];

    Object.entries(data[0])
      .filter((name) => regexIsNumeric(name[1]))
      .forEach((name) => names.push(name[0]));

    const newFilteredTypes = [];
    filtredTypes.forEach((array) => newFilteredTypes.push(array[0]));

    const filtredNames = names.filter((x) => !newFilteredTypes.includes(x));

    if (filtredNames.length === 0) {
      Object.assign(filtredNames, names);
    }

    return (
      <select
        onChange={ (e) => setType(e.target.value) }
        data-testid="column-filter"
      >
        { filtredNames.map((item, index) => (
          <option key={ index }>{item}</option>
        ))}
      </select>
    );
  };

  const greaterThan = () => (
    <select
      onChange={ (e) => setComp(e.target.value) }
      data-testid="comparison-filter"
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );

  const handleClick = () => {
    const newFiltered = [...filtredTypes, [type, comp, value]];
    setFiltredTypes([...new Set(newFiltered)]);

    const newFilter = {
      column: type,
      comparison: comp,
      value,
    };

    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        newFilter,
      ],
    });
  };

  const removeFilter = (item) => {
    const newItem = filtredTypes.filter((val) => val !== item);
    setFiltredTypes(newItem);

    const { filterByNumericValues } = filters;

    const newFilterByNumericValues = filterByNumericValues.filter((numeric) => !(
      numeric.column === item[0]
      && numeric.comparison === item[1]
      && numeric.value === item[2]
    ));

    setFilters({
      ...filters,
      filterByNumericValues: newFilterByNumericValues,
    });
  };

  const renderFilters = () => (
    <div>
      {filtredTypes.map((item, index) => (
        <div key={ index } data-testid="filter">
          <span>
            {`${item[0]} ${item[1]} ${item[2]}`}
          </span>
          <button
            onClick={ () => removeFilter(item) }
            type="button"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );

  const numberInput = () => (
    <input
      onChange={ (e) => setValue(e.target.value) }
      data-testid="value-filter"
      type="number"
    />
  );

  const filterButton = () => (
    <button
      onClick={ () => handleClick() }
      type="button"
      data-testid="button-filter"
    >
      Filter
    </button>
  );

  return (
    <div>
      {data[0] && renderDropdown()}
      {greaterThan()}
      {numberInput()}
      {filterButton()}
      { filtredTypes.length > 0 && renderFilters() }
    </div>
  );
}

export default FilterByAmount;
