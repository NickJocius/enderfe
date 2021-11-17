import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import styled from 'styled-components';

const StyledProperties = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    min-height: 100%;
    padding:  2rem 2rem 2rem;

    @media (max-width: 791px){
        flex-direction: column;
        align-items: center;
    }
`

const Properties = () => {
    const properties = useSelector((state) => state.properties.properties);
    return (
        <StyledProperties>
            {properties && (
                properties.map((p, i) => (
                    <Card key={p.id} property={p}/>
                ))
            )}
        </StyledProperties>
    );
};

export default Properties;
