import React, { useContext } from 'react';
import starWarsPlanets from '../../context';

export default function Table() {
  const { data } = useContext(starWarsPlanets);

  const tableHeaders = Object.keys(data[0]);
  const residentsIndex = tableHeaders.indexOf('residents');
  tableHeaders.splice(residentsIndex, 1);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={ `header${index}` }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        { data.map((planet, index1) => (
          <tr key={ `planet.name${index1}` }>
            { tableHeaders.map((header, index2) => (
              <td key={ `${planet.name}${index2}` }>{ planet[header] }</td>
            )) }
          </tr>
        ))}
      </tbody>
    </table>
  );
}