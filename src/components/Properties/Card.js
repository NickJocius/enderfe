import React from 'react';
import styled from 'styled-components';
import { getPropertyByID } from '../../services/properties';
import { addCurrProperty } from '../../features/properties/currentPropSlice';
import { loadLeases } from '../../features/leases/leasesSlice';
import { useDispatch } from 'react-redux'

const StyledCard = styled.div`
    width: 25rem;
    position: relative;
    height: 300px;
    max-width: 100%;
    border: 1px solid black;
    border-radius: 15px;
    margin: .6rem;
    box-shadow: 3px 3px 20px rgba(0,0,0,.4);
    transition: all .2s ease-in-out;
    font-size: .9rem;
    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        border: 2px groove #3e68f1;
    }
    &:active {
        transform: translateY(4px);
        box-shadow: 1px 1px 10px rgba(0,0,0,.3);
    }
     @media (max-width: 791px){
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        margin: .8rem;
    }

`
const CardHeader = styled.div`
    background:center url('https://source.unsplash.com/random/?condo');
    min-height: 50%;
    border-radius: 15px 15px 0px 0px;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
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
    padding: 1rem 0 .5rem 0;
`
const DetailsTwo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: .9rem;
`

const Card = ({ property }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        getPropertyByID(property.id).then((data) => {
            console.log(data)
            dispatch(loadLeases(data));
            dispatch(addCurrProperty(property))
        });
    }
    const convertRent = () => {
        let value = Number(property.baseRent.replace(/[^0-9\.-]+/g,""));
        return parseFloat(value);
        
    }
    const perMonth = Math.round(((convertRent() / property.sqft) / 12) * 100)/100;
    const perYear = Math.round((convertRent() / property.sqft)*100)/100;

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
                    <span>${perMonth}/sqft/mo</span>
                    <span>${perYear}/sqft/yr</span>
                </DetailsTwo>
            </CardDetails>
        </StyledCard>
    );
};

export default Card;
