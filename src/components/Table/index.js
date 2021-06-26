import React, { useContext } from 'react';
import AppContext from '../../context/context';

function Table() {
  const { data, filters } = useContext(AppContext);

  function filter() {
    const filterName = filters.filterByName.name
      ? data.filter((planet) => planet.name.includes(filters.filterByName.name)) : data;
    return filterName;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>surface_water</th>
          <th>population</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>films</th>
          <th>url</th>
          <th>created</th>
          <th>edited</th>
        </tr>
      </thead>
      <tbody>
        {filter().map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.films}</td>
            <td>{planet.url}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
