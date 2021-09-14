import React, { useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Table from "./Table";
import { Meta } from "@storybook/react/types-6-0";

export default {
    component: Table,
    title: "Components/Table",
    decorators: [withKnobs],
} as Meta;

export function Index() {
    const rowData = [
        {
            col1: 'Hello',
            col2: 'World',
        },
        {
            col1: 'react-table',
            col2: 'rocks',
        },
        {
            col1: 'whatever',
            col2: 'you want',
        },
    ];

    const columnsData = [
        {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Column 2',
            accessor: 'col2',
        },
    ];

    return (
        <Table
            columnData={columnsData}
            rowData={rowData}
        />
    );
}