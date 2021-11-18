import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LeaseTable from './LeaseTable';

const StyledLeases = styled.section`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:  1rem 2rem;
`

const Leases = () => {
    const property = useSelector((state) => state.currentProp.currentProp);
    return (
        <StyledLeases>
            <h2>{property ? property.name : `Property Name`} Leases</h2>
            <LeaseTable/>
        </StyledLeases>
    );
};

export default Leases;
