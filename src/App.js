import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Properties from './components/Properties/Properties';
import Leases from './components/Leases/Leases';
import { getProperties } from './services/properties';
import { loadProperties } from './features/properties/propertiesSlice';
import styled from 'styled-components';
import "./App.css";

const Wrapper = styled.div`
  max-height: 80%;
  max-width: 80%;
  background: white;
  @media (max-width: 1025px){
    max-height: 90%;
    max-width: 90%;
    }
`

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
      <Wrapper>
        <Properties/>
        <Leases/>
      </Wrapper>
    </main>
  );
}

export default App;
