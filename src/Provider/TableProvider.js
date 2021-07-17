import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './Context';
import Fetch from '../Components/Fetch';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    const fetchApi = async () => {
      const dataResult = await Fetch();
      setData(dataResult);
      setLoading(false);
    };
    fetchApi();
  }, []);

  function nameFilter(name) {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  }
  function numericFilter(filter) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ],
    });
  }

  function removeFilter(name) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((filter) => filter.column !== name),
      ],
    });
  }
  function orderBy({ column = filters.order.column, sort = filters.order.sort }) {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  }

  return (
    <context.Provider
      value={ { data,
        filters,
        setFilters,
        filtered,
        setFiltered,
        nameFilter,
        numericFilter,
        removeFilter,
        loading,
        orderBy,
      } }
    >
      { children }
    </context.Provider>
  );
}
TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
