import { useState, useMemo } from "react"
import { useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query";
import {
  type ColumnDef,
  type RowData,
  useTable,
} from "@tanstack/react-table"
import { toast } from "sonner"
import { utils, writeFile } from "xlsx"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Download, Info, Trash } from "lucide-react";
import { features, type DataTableFeatures } from "./data-table-features";
import { TableFooter } from "@/components";
import SearchInput from "@/components/search-input";
import ButtonContainer from "@/components/button-group-container"
import type { ButtonGroupItem, InboxTableColumn } from "@/types";

interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<DataTableFeatures, TData>[]
    data: TData[]
}

function DataTable<TData extends RowData>({ columns, data }: DataTableProps<TData>) {
  const navigate = useNavigate();
  const count = useMemo(() => data.length, [data]);

  const [firstIndex, setFirstIndex] = useState(0)
  const [secondIndex, setSecondIndex] = useState(firstIndex + 10 > count ? count : firstIndex + 10)

  const table = useTable({
    features,
    data,
    columns
  });

  const queryClient = useQueryClient();
  const selectedRows = useMemo(() => table.getSelectedRowIds(), [table]);
  const selectedRowCount = useMemo(() => table.getSelectedRowIds().length, [table]);

  const inboxTableButtonGroups: ButtonGroupItem[] = [
      {
          name: "Download",
          icon: <Download size={16} />,
          disabled: selectedRowCount === 0,
          onClick: () => {
            const listOutput = data.filter((_, index: number) => {
              if(Object.keys(selectedRows).includes(index.toString()))
                return { senderEmail: data[index] }})
              const worksheet = utils.json_to_sheet(listOutput);
              const workbook = utils.book_new();
              utils.book_append_sheet(workbook, worksheet, "Emails");
              writeFile(workbook, "Email_Report.xlsx");
              toast.success("Email(s) printed")
              table.resetRowSelection()
          }
      },
      {
          name: "Info",
          icon: <Info size={16} />,
          onClick: () => {
              console.log("Info button clicked");
          }
      },
      {
          name: "Delete",
          icon: <Trash size={16} />,
          disabled: selectedRowCount === 0,
          onClick: () => {
              queryClient.setQueryData(
                  ["inboxListApi"],
                  (oldData: { inboxList: InboxTableColumn[]; totalCount: number }) => {
                      if (!oldData) return oldData;
                      return {
                          ...oldData,
                          inboxList: oldData.inboxList.filter((_, index: number) => !selectedRows.includes(index.toString())),
                          totalCount: oldData.totalCount - selectedRows.filter(Boolean).length,
                      };
                  }
              );
              toast.success("Row(s) deleted")
              table.resetRowSelection()
          }
      }
  ]

  return (
    <>
      <div className="flex items-center justify-between p-4 gap-4">
        <SearchInput placeholder="Search mail" />
        <ButtonContainer buttonGroups={inboxTableButtonGroups} />
      </div>
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
    </>
  );
}

export default DataTable;