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
        <Table className="bg-white text-[12px]">
            <TableHeader className="bg-gray-50 font-extrabold">
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
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) =>
                                    <TableCell key={cell.id}>
                                        <table.FlexRender cell={cell} />
                                    </TableCell>
                                )}
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