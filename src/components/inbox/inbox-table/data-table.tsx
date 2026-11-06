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
import { features, type DataTableFeatures } from "./data-table-features";

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
              return (
              <TableRow
                key={row.id}
                className={`hover:cursor-pointer ${row.getIsSelected() ? "bg-blue-50" : undefined}`}
                onClick={() => navigate(`/inbox/conversation/${row.getValue<string>("id")}`)}
              >
                {row.getVisibleCells().map((cell) => 
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                )}
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