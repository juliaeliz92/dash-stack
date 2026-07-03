import React, {useMemo} from "react"
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
import { useSalesChartData } from "@/services"
import { Months } from "@/types"

const chartConfig = {
    percentage: {
        label: "Sales",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

function SalesLineChart() {
    const [selectedMonth, setSelectedMonth] = React.useState(Months[new Date().getMonth()])
    const {data, isLoading, error} = useSalesChartData()
    
   
    const selectedMonthData = useMemo(() => {
        return data?.find((item) => item.month === selectedMonth)?.sales || []
    }, [data, selectedMonth])

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month)
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error occurred while fetching sales data.</div>;
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
                            {Months.map((month) => (
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
                        data={selectedMonthData}
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