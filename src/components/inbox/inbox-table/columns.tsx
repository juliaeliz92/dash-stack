import { createColumnHelper } from "@tanstack/react-table"
import type { InboxTableColumn } from "@/types"
import type { DataTableFeatures } from "./data-table-features"
import { Checkbox } from "@/components/ui/checkbox";

const columnHelper = createColumnHelper<DataTableFeatures, InboxTableColumn>();

const InboxTableColumns = columnHelper.columns([
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) =>
          row.toggleSelected(!!value)
        }
        onClick={(e) => e.stopPropagation()}
        className="translate-y-[2px] hover:cursor-pointer hover:opacity-80"
        aria-label="Select row"
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("id", {
    header: "ID"
  }),
  columnHelper.accessor("isStarred", {
    header: "Starred"
  }),
  columnHelper.accessor("senderName", {
    header: "From"
  }),
  columnHelper.accessor("label", {
    header: "Label"
  }),
  columnHelper.accessor("emailSubject", {
    header: "Subject"

  }),
  columnHelper.accessor("lastModifiedDate", {
    header: "Date"
  })
]);

export default InboxTableColumns
