import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const data = [
    { productName: "Laptop Dell", imageURL: "https://picsum.photos/id/0/200/300", location: "New York", dateTime: "2024-06-01 10:00", piece: 10, amount: "$1000", status: "Delivered" },
    { productName: "White Stilettos", imageURL: "https://picsum.photos/id/21/200/300", location: "Los Angeles", dateTime: "2024-06-02 14:30", piece: 5, amount: "$500", status: "Pending" },
    { productName: "Xbox Controller", imageURL: "https://picsum.photos/id/96/200/300", location: "Chicago", dateTime: "2024-06-03 09:15", piece: 20, amount: "$2000", status: "Rejected" },
]

function DealsTable() {
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableCaption>Deals Details</TableCaption>
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
                        {data.map((deal, index) => (
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