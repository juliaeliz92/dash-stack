import { createColumnHelper } from "@tanstack/react-table"
import type { OrderListProps } from "@/types"
import type { DataTableFeatures } from "./data-table-features"

const columnHelper = createColumnHelper<DataTableFeatures, OrderListProps>()

const orderListTableColumns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("customerName", {
    header: "NAME",
  }),
  columnHelper.accessor("customerAddress", {
    header: "ADDRESS",
  }),
  columnHelper.accessor("date", {
    header: "DATE",
  }),
  columnHelper.accessor("orderType", {
    header: "ORDER TYPE",
  }),
  columnHelper.accessor("orderStatus", {
    header: "ORDER STATUS",
  }),
])

export default orderListTableColumns