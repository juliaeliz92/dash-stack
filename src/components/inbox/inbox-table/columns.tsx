import type { ColumnDef } from "@tanstack/react-table"
import type { InboxTableColumn } from "@/types"

export const inboxTableColumns: ColumnDef<InboxTableColumn>[] = [
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

