import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    ChartContainer,
    ChartTooltipContent,
    ChartTooltip,
    type ChartConfig,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

const data = [
   { month: "January", sales: [
    { value: 1000, percentage: 0.28 },
    { value: 1200, percentage: 0.14 },
    { value: 1400, percentage: 0.38 },
    { value: 1600, percentage: 0.05 },
    { value: 1800, percentage: 0.22 },
    { value: 2000, percentage: 0.32 },
    { value: 2200, percentage: 0.1 },
    { value: 2400, percentage: 0.36 },
    { value: 2600, percentage: 0.18 },
    { value: 2800, percentage: 0.08 },
    { value: 3000, percentage: 0.3 },
    { value: 3200, percentage: 0.2 },
    { value: 3400, percentage: 0.12 },
    { value: 3600, percentage: 0.34 },
    { value: 3800, percentage: 0.24 },
    { value: 4000, percentage: 0.16 },
    { value: 4200, percentage: 0.26 },
    { value: 4400, percentage: 0.4 },
   ] },
   { month: "February", sales: [
    { value: 1100, percentage: 0.29 },
    { value: 1300, percentage: 0.15 },
    { value: 1500, percentage: 0.39 },
    { value: 1700, percentage: 0.06 },
    { value: 1900, percentage: 0.23 },
    { value: 2100, percentage: 0.33 },
    { value: 2300, percentage: 0.11 },
    { value: 2500, percentage: 0.37 },
    { value: 2700, percentage: 0.19 },
    { value: 2900, percentage: 0.09 },
    { value: 3100, percentage: 0.31 },
    { value: 3300, percentage: 0.21 },
    { value: 3500, percentage: 0.13 },
    { value: 3700, percentage: 0.35 },
    { value: 3900, percentage: 0.25 },
    { value: 4100, percentage: 0.17 },
    { value: 4300, percentage: 0.27 },
    { value: 4500, percentage: 0.41 },
   ] },
   { month: "March", sales: [
    { value: 1200, percentage: 0.3 },
    { value: 1400, percentage: 0.16 },
    { value: 1600, percentage: 0.4 },
    { value: 1800, percentage: 0.07 },
    { value: 2000, percentage: 0.24 },
    { value: 2200, percentage: 0.34 },
    { value: 2400, percentage: 0.12 },
    { value: 2600, percentage: 0.38 },
    { value: 2800, percentage: 0.2 },
    { value: 3000, percentage: 0.1 },
    { value: 3200, percentage: 0.32 },
    { value: 3400, percentage: 0.22 },
    { value: 3600, percentage: 0.14 },
    { value: 3800, percentage: 0.36 },
    { value: 4000, percentage: 0.26 },
    { value: 4200, percentage: 0.18 },
    { value: 4400, percentage: 0.28 },
    { value: 4600, percentage: 0.42 },
   ] },
   { month: "April", sales: [
    { value: 1300, percentage: 0.31 },
    { value: 1500, percentage: 0.17 },
    { value: 1700, percentage: 0.41 },
    { value: 1900, percentage: 0.08 },
    { value: 2100, percentage: 0.25 },
    { value: 2300, percentage: 0.35 },
    { value: 2500, percentage: 0.13 },
    { value: 2700, percentage: 0.39 },
    { value: 2900, percentage: 0.21 },
    { value: 3100, percentage: 0.11 },
    { value: 3300, percentage: 0.33 },
    { value: 3500, percentage: 0.23 },
    { value: 3700, percentage: 0.15 },
    { value: 3900, percentage: 0.37 },
    { value: 4100, percentage: 0.27 },
    { value: 4300, percentage: 0.19 },
    { value: 4500, percentage: 0.29 },
    { value: 4700, percentage: 0.43 },
   ] },
   { month: "May", sales: [
    { value: 1400, percentage: 0.32 },
    { value: 1600, percentage: 0.18 },
    { value: 1800, percentage: 0.42 },
    { value: 2000, percentage: 0.09 },
    { value: 2200, percentage: 0.26 },
    { value: 2400, percentage: 0.36 },
    { value: 2600, percentage: 0.14 },
    { value: 2800, percentage: 0.4 },
    { value: 3000, percentage: 0.22 },
    { value: 3200, percentage: 0.12 },
    { value: 3400, percentage: 0.34 },
    { value: 3600, percentage: 0.24 },
    { value: 3800, percentage: 0.16 },
    { value: 4000, percentage: 0.38 },
    { value: 4200, percentage: 0.28 },
    { value: 4400, percentage: 0.2 },
    { value: 4600, percentage: 0.3 },
    { value: 4800, percentage: 0.44 },
   ] },
   { month: "June", sales: [
    { value: 1500, percentage: 0.33 },
    { value: 1700, percentage: 0.19 },
    { value: 1900, percentage: 0.43 },
    { value: 2100, percentage: 0.1 },
    { value: 2300, percentage: 0.27 },
    { value: 2500, percentage: 0.37 },
    { value: 2700, percentage: 0.15 },
    { value: 2900, percentage: 0.41 },
    { value: 3100, percentage: 0.23 },
    { value: 3300, percentage: 0.13 },
    { value: 3500, percentage: 0.35 },
    { value: 3700, percentage: 0.25 },
    { value: 3900, percentage: 0.17 },
    { value: 4100, percentage: 0.39 },
    { value: 4300, percentage: 0.29 },
    { value: 4500, percentage: 0.21 },
    { value: 4700, percentage: 0.31 },
    { value: 4900, percentage: 0.45 },
   ] },
   { month: "July", sales: [
    { value: 1600, percentage: 0.34 },
    { value: 1800, percentage: 0.2 },
    { value: 2000, percentage: 0.44 },
    { value: 2200, percentage: 0.11 },
    { value: 2400, percentage: 0.28 },
    { value: 2600, percentage: 0.38 },
    { value: 2800, percentage: 0.16 },
    { value: 3000, percentage: 0.42 },
    { value: 3200, percentage: 0.24 },
    { value: 3400, percentage: 0.14 },
    { value: 3600, percentage: 0.36 },
    { value: 3800, percentage: 0.26 },
    { value: 4000, percentage: 0.18 },
    { value: 4200, percentage: 0.4 },
    { value: 4400, percentage: 0.3 },
    { value: 4600, percentage: 0.22 },
    { value: 4800, percentage: 0.32 },
    { value: 5000, percentage: 0.46 },
   ] },
   { month: "August", sales: [
    { value: 1700, percentage: 0.35 },
    { value: 1900, percentage: 0.21 },
    { value: 2100, percentage: 0.45 },
    { value: 2300, percentage: 0.12 },
    { value: 2500, percentage: 0.29 },
    { value: 2700, percentage: 0.39 },
    { value: 2900, percentage: 0.17 },
    { value: 3100, percentage: 0.43 },
    { value: 3300, percentage: 0.25 },
    { value: 3500, percentage: 0.15 },
    { value: 3700, percentage: 0.37 },
    { value: 3900, percentage: 0.27 },
    { value: 4100, percentage: 0.19 },
    { value: 4300, percentage: 0.41 },
    { value: 4500, percentage: 0.31 },
    { value: 4700, percentage: 0.23 },
    { value: 4900, percentage: 0.33 },
    { value: 5100, percentage: 0.47 },
   ] },
   { month: "September", sales: [
    { value: 1800, percentage: 0.36 },
    { value: 2000, percentage: 0.22 },
    { value: 2200, percentage: 0.46 },
    { value: 2400, percentage: 0.13 },
    { value: 2600, percentage: 0.3 },
    { value: 2800, percentage: 0.4 },
    { value: 3000, percentage: 0.18 },
    { value: 3200, percentage: 0.44 },
    { value: 3400, percentage: 0.26 },
    { value: 3600, percentage: 0.16 },
    { value: 3800, percentage: 0.38 },
    { value: 4000, percentage: 0.28 },
    { value: 4200, percentage: 0.2 },
    { value: 4400, percentage: 0.42 },
    { value: 4600, percentage: 0.32 },
    { value: 4800, percentage: 0.24 },
    { value: 5000, percentage: 0.34 },
    { value: 5200, percentage: 0.48 },
   ] },
   { month: "October", sales: [
    { value: 1900, percentage: 0.37 },
    { value: 2100, percentage: 0.23 },
    { value: 2300, percentage: 0.47 },
    { value: 2500, percentage: 0.14 },
    { value: 2700, percentage: 0.31 },
    { value: 2900, percentage: 0.41 },
    { value: 3100, percentage: 0.19 },
    { value: 3300, percentage: 0.45 },
    { value: 3500, percentage: 0.27 },
    { value: 3700, percentage: 0.17 },
    { value: 3900, percentage: 0.39 },
    { value: 4100, percentage: 0.29 },
    { value: 4300, percentage: 0.21 },
    { value: 4500, percentage: 0.43 },
    { value: 4700, percentage: 0.33 },
    { value: 4900, percentage: 0.25 },
    { value: 5100, percentage: 0.35 },
    { value: 5300, percentage: 0.49 },
   ] },
   { month: "November", sales: [
    { value: 2000, percentage: 0.38 },
    { value: 2200, percentage: 0.24 },
    { value: 2400, percentage: 0.48 },
    { value: 2600, percentage: 0.15 },
    { value: 2800, percentage: 0.32 },
    { value: 3000, percentage: 0.42 },
    { value: 3200, percentage: 0.2 },
    { value: 3400, percentage: 0.46 },
    { value: 3600, percentage: 0.28 },
    { value: 3800, percentage: 0.18 },
    { value: 4000, percentage: 0.4 },
    { value: 4200, percentage: 0.3 },
    { value: 4400, percentage: 0.22 },
    { value: 4600, percentage: 0.44 },
    { value: 4800, percentage: 0.34 },
    { value: 5000, percentage: 0.26 },
    { value: 5200, percentage: 0.36 },
    { value: 5400, percentage: 0.5 },
   ] },
   { month: "December", sales: [
    { value: 2100, percentage: 0.39 },
    { value: 2300, percentage: 0.25 },
    { value: 2500, percentage: 0.49 },
    { value: 2700, percentage: 0.16 },
    { value: 2900, percentage: 0.33 },
    { value: 3100, percentage: 0.43 },
    { value: 3300, percentage: 0.21 },
    { value: 3500, percentage: 0.47 },
    { value: 3700, percentage: 0.29 },
    { value: 3900, percentage: 0.19 },
    { value: 4100, percentage: 0.41 },
    { value: 4300, percentage: 0.31 },
    { value: 4500, percentage: 0.23 },
    { value: 4700, percentage: 0.45 },
    { value: 4900, percentage: 0.35 },
    { value: 5100, percentage: 0.27 },
    { value: 5300, percentage: 0.37 },
    { value: 5500, percentage: 0.51 },
   ] },
]

const chartConfig = {
    percentage: {
        label: "Sales",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

function SalesLineChart() {
    const [selectedMonth, setSelectedMonth] = React.useState(months[new Date().getMonth()])
    const [selectedData, setSelectedData] = React.useState(data.find(d => d.month === selectedMonth)?.sales || [])

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month)
        setSelectedData(data.find(d => d.month === month)?.sales || [])
    }

    return (
        <div className="flex items-center justify-center">
        <Card className="w-full">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>Sales Details</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" >
                            {selectedMonth}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            {months.map((month) => (
                                <DropdownMenuItem key={month} onSelect={() => handleMonthSelect(month)}>
                                    {month}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer={true}
                        data={selectedData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="value"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => (value/1000) + "k"}
                        />
                        <YAxis
                            dataKey="percentage"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${value * 100}%`}
                        />
                        <Line
                            dataKey="percentage"
                            type="linear"
                            stroke="var(--color-chart-1)"
                            strokeWidth={2}
                            dot={true}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
        </div>
    );
}

export default SalesLineChart;