import { Star } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table"
import type { InboxTableColumn } from "@/types"
import type { DataTableFeatures } from "./data-table-features"
import { Checkbox } from "@/components/ui/checkbox";
import { inboxDefaultLabels } from "@/constants";
import { Label } from "@/components";

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
    header: "ID",
    cell: () => null
  }),
  columnHelper.accessor("isStarred", {
    header: "Starred",
    cell: ({ row }) => <Star className={`h-4 w-4 ${row.getValue<boolean>("isStarred") ? "fill-yellow-400 text-yellow-400" : "fill-none text-gray-400"}`} />
  }),
  columnHelper.accessor("senderName", {
    header: "From",
    cell: ({ row }) => row.getValue("senderName")
  }),
  columnHelper.accessor("label", {
    header: "Label",
    cell: () => null
  }),
  columnHelper.accessor("emailSubject", {
    header: "Subject",
    cell: ({ row }) => {
      const label = row.getValue<string>("label");
      return (
        <div className="flex gap-4">
          {label && <Label label={label} labelList={inboxDefaultLabels}/>}
          {row.getValue("emailSubject")}
        </div>
      )
    }
  }),
  columnHelper.accessor("lastModifiedDate", {
    header: "Date",
    cell: ({ row }) => {
      const dateValue = new Date(row.getValue<string>("lastModifiedDate"))
      if (dateValue.getDate() === new Date().getDate() && dateValue.getMonth() === new Date().getMonth() && dateValue.getFullYear() === new Date().getFullYear()) {
        return dateValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      return dateValue.toLocaleDateString([], { dateStyle: 'medium' })
    }
  })
]);

export default InboxTableColumns
