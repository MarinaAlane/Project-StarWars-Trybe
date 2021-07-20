import React, { useContext, useEffect } from 'react';
import planetContext from '../Context/planetContext';
import FilterNumeric from './FilterComparison';

// import planetAPI from '../services/planetAPI';

const Table = () => {
  const {
    data,
    filters: { filterByName: { name } },
    filterSelect,
    clicked,
  } = useContext(planetContext);
  console.log(filterSelect);
  const { column, comparison, value } = filterSelect[0];
  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  if (clicked === true) {
    console.log('entrou');
    const planetsFilter = data.filter((planets) => FilterNumeric(planets[column], comparison, value));
    return (
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital Period PopulatioN</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
          {planetsFilter.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.name}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </thead>
      </table>
    );
  }

  if (name !== '') {
    const planetsName = data.filter((planets) => planets.name.includes(name));

    return (
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital Period PopulatioN</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
          {planetsName.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.name}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </thead>
      </table>
    );
  }

  // if (filterByNumericValues) {
  //   const numericFilter = filterByNumericValues.map((planets) => {
  //     const { column, comparison, value } = planets;

  //     switch (comparison) {
  //     case 'maior que':
  //       return data.filter((planets) => Number(planets[column]) > Number(value));
  //     case 'menor que':
  //       return data.filter((planets) => Number(planets[column]) < Number(value));
  //     case 'igual a':
  //       return data.filter((planets) => Number(planets[column]) < Number(value));
  //     default:
  //       return data;
  //     }
  //   });

  //   return (
  //     numericFilter[0].map((planet) => (
  //       <tr key={ planet.name }>
  //         <td>{planet.name}</td>
  //         <td>{planet.rotation_period}</td>
  //         <td>{planet.orbital_period}</td>
  //         <td>{planet.diameter}</td>
  //         <td>{planet.climate}</td>
  //         <td>{planet.gravity}</td>
  //         <td>{planet.terrain}</td>
  //         <td>{planet.surface_water}</td>
  //         <td>{planet.population}</td>
  //         <td>
  //           {
  //             planet.films
  //               .map((film, index) => (<ul key={ index }><li>{ film }</li></ul>))
  //           }
  //         </td>
  //         <td>{planet.created}</td>
  //         <td>{planet.edited}</td>
  //         <td>{planet.url}</td>
  //       </tr>
  //     ))
  //   );
  // }
  return (
    <table>
      <thead>
        <tr>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Name</th>
          <th>Orbital Period PopulatioN</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
        {data.length && data.map((planets) => (
          <tr key={ planets.name }>
            <td>{planets.climate}</td>
            <td>{planets.created}</td>
            <td>{planets.diameter}</td>
            <td>{planets.edited}</td>
            <td>
              {
                planets.films.map((film, index) => (<ul key={ index }>{film}</ul>))
              }
            </td>
            <td>{planets.gravity}</td>
            <td>{planets.name}</td>
            <td>{planets.orbital_period}</td>
            <td>{planets.population}</td>
            <td>{planets.rotation_period}</td>
            <td>{planets.surface_water}</td>
            <td>{planets.terrain}</td>
            <td>{planets.url}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
