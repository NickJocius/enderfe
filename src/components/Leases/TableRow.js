import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: table-row;
    min-width: 100%;
    border-bottom: 1px solid grey;
`
const TableCell = styled.div`
    display: table-cell;
`

const TableRow = ({ lease }) => {
    
    const {
        startDate,
        inclusiveEndDate,
        status,
        contacts,
    } = lease;

    const getPrimary = () => {
        for (const key in contacts) {
            if (contacts[key].tags.includes("PRIMARY")) {
                return (
                    <TableCell>{contacts[key].phone}</TableCell>
                )
            }
        }
    }

    const getTenants = () => {
        const tens = [];
        for (const key in contacts) {
            if (contacts[key].tags.includes("TENANT")) {
                tens.push(key);
            }
        }
        return (
            <TableCell>{tens}</TableCell>
        )
    }

    return (
        <Row>
            {getTenants()}
            <TableCell>{startDate}</TableCell>
            <TableCell>{inclusiveEndDate}</TableCell>
            <TableCell>{status}</TableCell>
            {getPrimary()}
        </Row>
    );
};

export default TableRow;
