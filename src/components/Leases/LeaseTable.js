import React from 'react';
import styled from 'styled-components';

const TableCont = styled.div`
    width: 100%;
    display: table;
    min-height: 350px;
    border: 1px solid grey;
`
const TableHeader = styled.div`
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
`
const HeaderCol = styled.div`
    display: table-cell;
    padding: 10px;
    text-align: justify;
    border-bottom: 1px solid black;
`

const TableBody = styled.div`
    display: table-row-group;
    min-height: 350px;
    min-width:100%;   
`
const TableRow = styled.div`
    display: table-row;
    min-width: 100%;
    border-bottom: 1px solid grey;
`
const TableCell = styled.div`
    display: table-cell;
`

const LeaseTable = () => {

    return (
        <TableCont>
            <TableHeader>
                <HeaderCol>Tenant</HeaderCol>
                <HeaderCol>Start Date</HeaderCol>
                <HeaderCol>End Date</HeaderCol>
                <HeaderCol>Lease Status</HeaderCol>
                <HeaderCol>Primary Contact</HeaderCol>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
        </TableCont>
    )
}

export default LeaseTable
