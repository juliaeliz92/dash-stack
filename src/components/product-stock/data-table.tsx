import { useState } from "react";
import {
    type ColumnDef,
    type RowData,
    useTable,
} from "@tanstack/react-table"
import { SquarePen, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { features, type DataTableFeatures } from "./data-table-features";
import { TableFooter } from "@/components";

interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<DataTableFeatures, TData>[]
    data: TData[]
    count: number
}

function DataTable<TData extends RowData>({ columns, data, count }: DataTableProps<TData>) {

    const table = useTable({
        features,
        data,
        columns,
    });

    const [firstIndex, setFirstIndex] = useState(0)
    const [secondIndex, setSecondIndex] = useState(firstIndex + 10 > count ? count : firstIndex + 10)
    return (
        <div>
            <Table className="bg-white text-[12px] border border-gray-200 rounded-lg">
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
                            <TableHead className="text-center">Actions</TableHead>
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
                                    <TableCell className="flex justify-center gap-2">
                                        <ButtonGroup>
                                            <Button variant="outline" size="sm">
                                                <SquarePen className="h-4 w-4" />
                                            </Button>
                                            <Button variant="destructive" size="sm">
                                                <Trash className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </ButtonGroup>
                                    </TableCell>
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
            <TableFooter
                isPreviousPage={table.getCanPreviousPage()}
                previousPage={table.previousPage}
                isNextPage={table.getCanNextPage()}
                nextPage={table.nextPage}
                firstIndex={firstIndex}
                setFirstIndex={setFirstIndex}
                secondIndex={secondIndex}
                setSecondIndex={setSecondIndex}
                count={count}
            />
        </div>
    );
}

export default DataTable;