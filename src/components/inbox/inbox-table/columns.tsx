import type { ColumnDef } from "@tanstack/react-table"
import type { InboxTableColumn } from "@/types"

export const inboxTableColumns: ColumnDef<InboxTableColumn>[] = [
  {
    accessorKey: "emailSubject",
    header: "Subject"
  },
  {
    accessorKey: "senderName",
    header: "From"
  },
  {
    accessorKey: "lastModifiedDate",
    header: "Date"
  }
];

