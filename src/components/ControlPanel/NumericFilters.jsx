import React, { useState, useCallback } from 'react';
import useStarWars from '../../hooks/useStarWars';
import { optionsColumnObj, optionsComparisonObj } from '../../services/data';
import Button from '../Generics/Button';
import Input from '../Generics/Input';
import Select from '../Generics/Select';

function NumericFilters() {
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparisonType, setFilterComparisonType] = useState('maior que');
  const [filterValue, setFilterValue] = useState('');
  const [filterOptions, setFilterOptions] = useState(optionsColumnObj);

  const {
    filterByNumericValues,
    setFiltersByNumericValue,
  } = useStarWars();

  const handleChangeColumn = (event) => {
    setFilterColumn(event.target.value);
  };

  const handleChangeComparisonType = (event) => {
    setFilterComparisonType(event.target.value);
  };

  const handleChangeFilterValue = (event) => {
    setFilterValue(event.target.value);
  };

  const handleHideItemFromOptionsList = useCallback(() => {
    setFilterOptions((prevState) => (
      prevState.filter((item) => (
        item !== filterByNumericValues.filterColumn
      ))
    ));
  }, [filterByNumericValues.filterColumn]);

  const handleClickOnFilterButton = useCallback((event) => {
    event.preventDefault();
    setFiltersByNumericValue(
      filterByNumericValues.concat({
        filterColumn,
        filterComparisonType,
        filterValue,
      }),
    );
    console.log(filterByNumericValues);
    // setActiveFilter(true);
    handleHideItemFromOptionsList();
  }, [filterByNumericValues,
    filterColumn,
    filterComparisonType,
    filterValue, handleHideItemFromOptionsList, setFiltersByNumericValue]);

  return (
    <div>
      <Select
        name="filterColumn"
        dataTestid="column-filter"
        options={ filterOptions }
        value={ filterColumn }
        onChange={ handleChangeColumn }
        placeholder="Selecione uma opção"
      />
      <Select
        name="filterComparisonType"
        options={ optionsComparisonObj }
        dataTestid="comparison-filter"
        placeholder="Selecione uma opção"
        value={ filterComparisonType }
        onChange={ handleChangeComparisonType }
      />
      <Input
        name="filterValue"
        data-testid="value-filter"
        type="number"
        placeholder="Digite um valor"
        value={ filterValue }
        onChange={ handleChangeFilterValue }
      />
      <Button
        data-testid="button-filter"
        onClick={ handleClickOnFilterButton }
      >
        Adicionar filtros
      </Button>
    </div>
  );
}

export default NumericFilters;
