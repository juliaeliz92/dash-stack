import { createColumnHelper } from "@tanstack/react-table"
import type { ProductStockProps } from "@/types"
import type { DataTableFeatures } from "./data-table-features"

const columnHelper = createColumnHelper<DataTableFeatures, ProductStockProps>()

const productStockTableColumns = columnHelper.columns([
    columnHelper.accessor("productImage", {
        header: () => <div className="font-bold pl-2">Image</div>,
        cell: ({row}) => {
            const imageUrl = row.getValue<string>("productImage")
            const altText = row.getValue<string>("productName")
            return (
                <div className="flex items-center justify-center">
                    <img src={imageUrl} alt={altText} className="w-12 h-12 object-cover rounded" />
                </div>
            )
        }
    }),
    columnHelper.accessor("productCategory", {
        header: () => <div className="font-bold">Category</div>
    }),
    columnHelper.accessor("productPrice", {
        header: () => <div className="font-bold">PRICE</div>,
        cell: ({ row }) => `$${row.getValue<number>("productPrice").toFixed(2)}`
    }),
    columnHelper.accessor("productPieces", {
        header: () => <div className="font-bold">PIECES</div>,
        cell: ({ row }) => row.getValue<number>("productPieces")
    }),
    columnHelper.accessor("availableColors", {
        header: () => <div className="font-bold">TYPE</div>,
        cell: ({ row }) => {
            const colors = row.getValue<string[]>("availableColors")
            return (
                <div className="flex gap-2">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            )
        }
    }),
])

export default productStockTableColumns