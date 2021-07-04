import React, { useContext } from 'react';
import AppContext from '../context/Context';
import Tbody from './Tbody';

function Table() {
  const { data,
    filters: { filterByName: { name },
    } } = useContext(AppContext);
  if (name !== '') {
    const search = data.filter((planets) => planets.name.toLowerCase().includes(name));
    return (
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Diameter </th>
            <th> Gravity </th>
            <th> Climate </th>
            <th> Terrain </th>
            <th> Created </th>
            <th> Population </th>
            <th> Surface Water </th>
            <th> Orbital Period </th>
            <th> Rotation Period </th>
            <th> Edited </th>
            <th> Film </th>
            <th> URL </th>
          </tr>
        </thead>
        <tbody>
          {search.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.url}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <Tbody />
  );
}

export default Table;
