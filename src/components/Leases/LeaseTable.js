import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

const TableCont = styled.div`
    width: 100%;
    display: table;
    min-height: 250px;
    border: 1px solid grey;
    transition: all 2s ease-in;
    border-collapse: collapse;
    box-shadow: 3px 3px 20px rgba(0,0,0,.4);
   
`
const TableHeader = styled.div`
    display: table-header-group;
    background-color: #3e68f1;
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
    min-width:100%;
    padding: .2rem;
`
const DataWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
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
                {leases && leases.length ? (
                    leases.map((lease, i) => (
                        <TableRow key={lease.id} lease={lease}/>
                    ))
                ) : (
                        <DataWrapper>
                        <h2>No Data</h2>
                        </DataWrapper>
                )}
            </TableBody>
        </TableCont>
    )
}

export default LeaseTable
