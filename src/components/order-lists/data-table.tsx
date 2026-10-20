import {
    type ColumnDef,
    type RowData,
    useTable,
} from "@tanstack/react-table"
import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { orderListTableColumnId } from "@/constants";
import { features, type DataTableFeatures } from "./data-table-features";

interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<DataTableFeatures, TData>[]
    data: TData[]
}

function DataTable<TData extends RowData>({ columns, data }: DataTableProps<TData>) {

    const table = useTable({
        features,
        data,
        columns,
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder ? null : <table.FlexRender header={header} />}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => {
                        return (
                            <TableRow
                                key={row.id}
                            >
                                {row.getVisibleCells().map((cell) => {
                                    if (cell.column.id === orderListTableColumnId.date) {
                                        const dateValue = new Date(cell.getValue<string>())
                                        if (dateValue.getDate() === new Date().getDate() && dateValue.getMonth() === new Date().getMonth() && dateValue.getFullYear() === new Date().getFullYear()) {
                                            return (
                                                <TableCell key={cell.id}>
                                                    {dateValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </TableCell>
                                            )
                                        }
                                        return (
                                            <TableCell key={cell.id}>
                                                {dateValue.toLocaleDateString([], { dateStyle: 'medium' })}
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={cell.id}>
                                            <table.FlexRender cell={cell} />
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results found.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default DataTable;