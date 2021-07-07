import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsProvider';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
