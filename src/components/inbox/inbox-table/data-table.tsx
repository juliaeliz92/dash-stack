import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import type { DataTableProps } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { inboxTableColumnId } from "@/constants";
import { Star } from "lucide-react";
import { InboxLabel } from "@/components/inbox";

function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
      <Table>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.id === inboxTableColumnId.isStarred) {
                    return (
                      <TableCell key={cell.id}>
                        <Star className={`h-4 w-4 ${cell.getValue() ? "text-yellow-400" : "text-gray-400"}`} />
                      </TableCell>
                    )
                  } else if (cell.column.id === inboxTableColumnId.senderName) {
                    return (
                      <TableCell key={cell.id}>
                        <b>{flexRender(cell.column.columnDef.cell, cell.getContext())}</b>
                      </TableCell>
                    )
                  } else if (cell.column.id === inboxTableColumnId.label) {
                    return (
                      <TableCell key={cell.id}>
                        <InboxLabel label={cell.getValue() as string} />
                      </TableCell>
                    )
                  }
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )})}
              </TableRow>
            ))
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