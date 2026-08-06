import type { ColumnDef } from "@tanstack/react-table"
import type { InboxTableColumn } from "@/types"
import { Checkbox } from "@/components/ui/checkbox";

export const inboxTableColumns: ColumnDef<InboxTableColumn>[] = [
  {
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
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "isStarred",
    header: "Starred"
  },
  {
    accessorKey: "senderName",
    header: "From"
  },
  {
    accessorKey: "label",
    header: "Label"
  },
  {
    accessorKey: "emailSubject",
    header: "Subject"
  },
  {
    accessorKey: "lastModifiedDate",
    header: "Date"
  }
];

