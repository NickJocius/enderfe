import React, { useState, useEffect } from 'react';
import Properties from './components/Properties/Properties';
import { getProperties } from './services/properties';
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = () => {
    getProperties().then((data) => setProperties(data));
  }

  return (
    <main className="App">
      <Properties/>
    </main>
  );
}

export default App;
