import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {DatabaseItems} from "./types";
import {DatabaseItemData} from "../../data/testData";
import Image from 'react-bootstrap/Image';
import {Table} from "react-bootstrap";

const columnHelper = createColumnHelper<DatabaseItems>();

const columns = [
    columnHelper.accessor('id', {
        cell: info => info.getValue(),
        header: 'ID'
    }),
    columnHelper.accessor('icon', {
        cell: info => <div style={{width: '32px'}}><Image src={info.getValue()} fluid/></div>,
        header: 'Icon'
    }),
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: 'Name'
    })
];

const Database = () => {
    const [data, setData] = useState(() => [...DatabaseItemData]);
    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()});

    const params = useParams();

    console.log(params);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>)
                )}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row =>
                    <tr key={row.id}>
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
    );
};

export default Database;
