import {ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, useReactTable} from '@tanstack/react-table';
import React, {useMemo, useState}                                                   from 'react';
import {Button}                                                                     from 'react-bootstrap';
import Stack                                                                        from 'react-bootstrap/Stack';
import Table                                                                        from 'react-bootstrap/Table';
import Currency                                                                     from '../../../Components/Currency';
import useGetWallet                                                                 from '../Hooks/useGetWallet';
import {WalletTable}                                                                from '../types';

const Wallet = () => {
    const [btnFilter, setBtnFilter] = useState<string>('');

    const columns = useMemo<ColumnDef<WalletTable, any>[]>(
        () => [
            {
                id: 'main', columns: [
                    {header: 'Currency', accessorKey: 'name', cell: info => info.getValue()},
                    {
                        header:      'Total',
                        accessorKey: 'total',
                        cell:        info => <div className="d-flex justify-content-end"><Currency value={info.getValue()} name={info.row.original.name} /></div>
                    }
                ]
            }
        ], []);

    const {data} = useGetWallet();
    const table = useReactTable({
                                    data, columns,
                                    getCoreRowModel:      getCoreRowModel(),
                                    getFilteredRowModel:  getFilteredRowModel(),
                                    onGlobalFilterChange: setBtnFilter,
                                    state:                {globalFilter: btnFilter},
                                    globalFilterFn:       (row, columnId, value) => row.original.groups.includes(value)
                                });

    return (
        <Stack>
            <div className="my-2 d-flex justify-content-around">
                <Button variant="outline-secondary" size="sm" active={btnFilter === ''} onClick={() => setBtnFilter('')}>All</Button>
                <Button variant="outline-secondary" size="sm" active={btnFilter === 'general'} onClick={() => setBtnFilter('general')}>General</Button>
                <Button variant="outline-secondary" size="sm" active={btnFilter === 'competitive'} onClick={() => setBtnFilter('competitive')}>Competitive</Button>
                <Button variant="outline-secondary" size="sm" active={btnFilter === 'map'} onClick={() => setBtnFilter('map')}>Map</Button>
                <Button variant="outline-secondary" size="sm" active={btnFilter === 'keys'} onClick={() => setBtnFilter('keys')}>Keys</Button>
                <Button variant="outline-secondary" size="sm" active={btnFilter === 'dungeon'} onClick={() => setBtnFilter('dungeon')}>Dungeon</Button>
                <Button variant="outline-secondary" size="sm" active={btnFilter === 'black_lion'} onClick={() => setBtnFilter('black_lion')}>Black Lion</Button>
            </div>
            <div className="w-75">
                <Table striped bordered>
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header =>
                                                         <th key={header.id}>
                                                             {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                                         </th>
                            )}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map(row =>
                                                      <tr key={row.id} title={row.original.description || 'name'}>
                                                          {row.getVisibleCells().map(cell =>
                                                                                         <td key={cell.id}>
                                                                                             {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                                                         </td>
                                                          )}
                                                      </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        </Stack>
    );
};

export default Wallet;
