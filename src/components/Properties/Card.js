import React from 'react';
import styled from 'styled-components';
import { getPropertyByID } from '../../services/properties';

const StyledCard = styled.div`
    width: 25rem;
    position: relative;
    height: 300px;
    max-width: 100%;
    border: 1px solid black;
    border-radius: 15px;
    margin: .8rem;
    box-shadow: 1px 1px 10px rgba(0,0,0,.3);
    transition: all .2s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        border: 1.5px solid green;
    }

`
const CardHeader = styled.div`
    background:center url('https://source.unsplash.com/random/?condo');
    min-height: 50%;
    border-radius: 15px 15px 0px 0px;
`
const CardDetails = styled.div`
    min-height: 40%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Heading = styled.h3`
    margin: 0;
    padding: 1rem 1.2rem;
    color: white;
    background: rgba(0,0,0,.5);
    border-radius: 15px 15px 0px 0px;
`
const DetailsOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const DetailsTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
`

const Card = ({ property }) => {
    
    const handleClick = () => {
        getPropertyByID(property.id).then((data) => console.log(data))
    }

    return (
        <StyledCard onClick={handleClick}>
            <CardHeader>
                <Heading>{property.name}</Heading>
            </CardHeader>
            <CardDetails>
                <DetailsOne>
                    <span>{property.address1}{property.address2}</span>
                    <span>{property.baseRent}</span>
                </DetailsOne>
                <DetailsTwo>
                    <span>{property.sqft} sqft.</span>
                    <span>{property.sqft} sqft.</span>
                    <span>{property.sqft} sqft.</span>
                </DetailsTwo>
            </CardDetails>
        </StyledCard>
    );
};

export default Card;
