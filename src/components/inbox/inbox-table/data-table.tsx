import * as React from "react"
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
import { inboxTableColumnId } from "@/constants";
import { Star } from "lucide-react";
import { InboxLabel } from "@/components/inbox";

function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
      <Table>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const label = row.getValue<string>("label");
              return (
              <TableRow
                key={row.id}
                className={row.getIsSelected() ? "bg-blue-50" : undefined}
              >
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
                  } else if (cell.column.id === inboxTableColumnId.emailSubject) {
                    return (
                      <TableCell key={cell.id} className="flex gap-4">
                        {label && <InboxLabel label={label} />}
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    )
                  } else if(cell.column.id === inboxTableColumnId.lastModifiedDate) {
                    const dateValue = new Date(cell.getValue<string>())
                    if(dateValue.getDate() === new Date().getDate() && dateValue.getMonth() === new Date().getMonth() && dateValue.getFullYear() === new Date().getFullYear()) {
                      return (
                        <TableCell key={cell.id}>
                          {dateValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </TableCell>
                      )
                    }
                    return (
                      <TableCell key={cell.id}>
                        {dateValue.toLocaleDateString([], {dateStyle: 'medium'})}
                      </TableCell>
                    )
                  } else if(cell.column.id === inboxTableColumnId.label) {
                    return null
                  }
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            )})
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