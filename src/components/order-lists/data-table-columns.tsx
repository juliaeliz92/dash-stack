import { createColumnHelper } from "@tanstack/react-table"
import type { OrderListProps } from "@/types"
import type { DataTableFeatures } from "./data-table-features"
import { Label } from "@/components"
import { orderListStatusLabelColors } from "@/constants";

const columnHelper = createColumnHelper<DataTableFeatures, OrderListProps>()

const orderListTableColumns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: () => <div className="font-bold pl-2">ID</div>,
    cell: ({row}) => {
      const id = row.getValue<number>("id").toString()
      return(<div className="py-3 pl-2">{"0".repeat(5 - id.length).concat(id)}</div>)
    }
  }),
  columnHelper.accessor("customerName", {
    header: () => <div className="font-bold">NAME</div>,
  }),
  columnHelper.accessor("customerAddress", {
    header: () => <div className="font-bold">ADDRESS</div>,
  }),
  columnHelper.accessor("date", {
    header: () => <div className="font-bold">DATE</div>,
    cell: ({ row }) => new Date(row.getValue("date")).toLocaleString("en-US", { dateStyle: "long"})
  }),
  columnHelper.accessor("orderType", {
    header: () => <div className="font-bold">TYPE</div>,
    cell: ({ row }) => row.getValue<string>("orderType").split(" ")[0]
  }),
  columnHelper.accessor("orderStatus", {
    header: () => <div className="font-bold">STATUS</div>,
    cell: ({ row }) => <Label label={row.getValue<string>("orderStatus")} labelList={orderListStatusLabelColors} />
  }),
])

export default orderListTableColumns