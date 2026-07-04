import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useProductDeals } from "@/services";

function DealsTable() {
    const { data } = useProductDeals();

    return (
        <Card>
            <CardContent className="overflow-x-auto">
                <CardTitle className="mb-4">Recent Deals</CardTitle>
                <Table className="w-[50vw]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Date - Time</TableHead>
                            <TableHead>Piece</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((deal, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <img src={deal.imageURL} alt={deal.productName} className="w-10 h-10 rounded-md" />
                                        <span>{deal.productName}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{deal.location}</TableCell>
                                <TableCell>{deal.dateTime}</TableCell>
                                <TableCell>{deal.piece}</TableCell>
                                <TableCell>{deal.amount}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${deal.status === "Delivered" ? "bg-green-100 text-green-800" : deal.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                                        {deal.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default DealsTable