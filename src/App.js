import React from 'react';
import './App.css';
import { Provider } from '../provider/Provider';
import Table from '../components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
