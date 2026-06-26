import { Users, Box, ChartLine, History, TrendingUp, TrendingDown } from 'lucide-react';
import { SalesLineChart, DealsTable } from "@/components/dashboard"
import { Card, CardContent } from '@/components/ui/card';

const insightData = [
  { title: "Total Users", value: "1,345", changePercent: "5.2%", increase: true, time: "last month", icon: <Users className="text-purple-500" />, background: "bg-purple-100" },
  { title: "Total Orders", value: "12,234", changePercent: "3.8%", increase: false, time: "last week", icon: <Box className="text-orange-500" />, background: "bg-orange-100" },
  { title: "Total Sales", value: "$56,789", changePercent: "7.1%", increase: false, time: "last month", icon: <ChartLine className="text-green-500" />, background: "bg-green-100" },
  { title: "Total Pending", value: "567", changePercent: "4.5%", increase: true, time: "yesterday", icon: <History className="text-red-500" />, background: "bg-red-100" },
]

function Dashboard() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {insightData.map((insight, index) => (
          <Card key={index} className="p-4">
            <CardContent className="flex md:flex-col items-center space-x-4 gap-2">
              <div className="flex items-center gap-4">
                <div className="w-[100px] md:w-full">
                  <p className="text-sm font-medium text-gray-500 mb-2">{insight.title}</p>
                  <p className="text-2xl font-bold">{insight.value}</p>
                </div>
                <div className={`p-2 rounded-md ${insight.background}`}>
                  {insight.icon}
                </div>
              </div>
              <p className={`text-sm ${insight.increase ? 'text-green-500' : 'text-red-500'}`}>
                {insight.increase ? <TrendingUp className="inline-block w-4 h-4" /> : <TrendingDown className="inline-block w-4 h-4" />}{" "}
                {insight.changePercent} from {insight.time}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <SalesLineChart />
        <DealsTable />
      </div>
    </section>
  )
}

export default Dashboard