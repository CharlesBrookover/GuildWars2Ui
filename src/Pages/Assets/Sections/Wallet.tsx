import React from 'react';
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {WalletTable} from "../types";
import Image from 'react-bootstrap/Image';
import useGetWallet from "../Hooks/useGetWallet";
import Currency from "../../../Components/Currency";

const columnHelper = createColumnHelper<WalletTable>();

const columns = [
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: 'Currency'
    }),
    columnHelper.accessor('total', {
        cell: info => <div className="d-flex justify-content-end"><Currency value={info.getValue()} name={info.row.original.name}  />
        </div>,
        header: 'Total'
    })
];


const Wallet = () => {
    const {data} = useGetWallet();
    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()});

    return (
        <Stack>
            <div></div>
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
