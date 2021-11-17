import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

const TableCont = styled.div`
    width: 100%;
    display: table;
    min-height: 250px;
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

const LeaseTable = () => {
    const leases = useSelector((state) => state.leases.leases);
 
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
                {leases && (
                    leases.map((lease, i) => (
                        <TableRow key={lease.id} lease={lease}/>
                    ))
                )}
            </TableBody>
        </TableCont>
    )
}

export default LeaseTable
