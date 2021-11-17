import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Properties from './components/Properties/Properties';
import Leases from './components/Leases/Leases';
import { getProperties } from './services/properties';
import { loadProperties } from './features/properties/propertiesSlice';
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    findProperties();
  }, []);

  const findProperties = () => {
    getProperties().then((data) => dispatch(loadProperties(data)));
  }

  return (
    <main className="App">
      <Properties />
      <Leases/>
    </main>
  );
}

export default App;
