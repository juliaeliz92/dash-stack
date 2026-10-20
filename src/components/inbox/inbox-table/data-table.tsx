import { useNavigate } from "react-router"
import {
  type ColumnDef,
  type RowData,
  useTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { inboxTableColumnId } from "@/constants";
import { features, type DataTableFeatures } from "./data-table-features";
import { Star } from "lucide-react";
import { InboxLabel } from "@/components/inbox";

interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<DataTableFeatures, TData>[]
    data: TData[]
}

function DataTable<TData extends RowData>({ columns, data }: DataTableProps<TData>) {
  const navigate = useNavigate();

  const table = useTable({
    features,
    data,
    columns
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
                className={`hover:cursor-pointer ${row.getIsSelected() ? "bg-blue-50" : undefined}`}
                onClick={() => navigate(`/inbox/conversation/${row.getValue<string>("id")}`)}
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
                        <table.FlexRender cell={cell} />
                      </TableCell>
                    )
                  } else if (cell.column.id === inboxTableColumnId.emailSubject) {
                    return (
                      <TableCell key={cell.id} className="flex gap-4">
                        {label && <InboxLabel label={label} />}
                        <table.FlexRender cell={cell} />
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
                  } else if(cell.column.id === inboxTableColumnId.label || cell.column.id === inboxTableColumnId.id) {
                    return null
                  }
                  return (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
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