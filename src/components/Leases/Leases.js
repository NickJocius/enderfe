import React from 'react';
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
    return (
        <StyledLeases>
            <h2>Property Name Leases</h2>
            <LeaseTable/>
        </StyledLeases>
    );
};

export default Leases;
