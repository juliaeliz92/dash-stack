import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Calendar } from "@/components/ui/calendar"
import { Funnel, RotateCcw } from "lucide-react";
import { orderStatusValues, orderTypeValues } from "@/constants";
import { Button } from "../ui/button";

function FilterBar() {
    const [dateFilter, setDateFilter] = useState<Date | undefined>(new Date());
    return (
        <NavigationMenu className="border border-gray-200 rounded-lg text-[12px] font-bold bg-white">
            <NavigationMenuList>
                <NavigationMenuItem className="p-2 border-r border-gray-200">
                    <Funnel size={20} />
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2 border-r border-gray-200">
                    <span>Filter By</span>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2 border-r border-gray-200">
                    <NavigationMenuTrigger className="text-[12px] font-bold">
                        Date
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Calendar
                            mode="single"
                            selected={dateFilter}
                            onSelect={setDateFilter}
                        />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2 border-r border-gray-200">
                    <NavigationMenuTrigger className="text-[12px] font-bold">
                        Order Type
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <h3>Select Order Type</h3>
                        <div className="grid grid-cols-3 w-[400px] p-4">
                            {orderTypeValues.map((orderType) => (
                                <div key={orderType.name} className="flex items-center space-x-2">
                                    <span>{orderType.value}</span>
                                </div>
                            ))}
                        </div>
                        <span>*You can select multiple order types*</span>
                        <Button variant="secondary" className="mt-4">
                            Apply Now
                        </Button>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2 border-r border-gray-200">
                    <NavigationMenuTrigger className="text-[12px] font-bold">
                        Order Status
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <h3>Select Order Status</h3>
                        <div className="grid grid-cols-3 w-[400px] p-4">
                            {orderStatusValues.map((orderStatus) => (
                                <div key={orderStatus.name} className="flex items-center space-x-2">
                                    <span>{orderStatus.value}</span>
                                </div>
                            ))}
                        </div>
                        <span>*You can select multiple order statuses*</span>
                        <Button variant="secondary" className="mt-4">
                            Apply Now
                        </Button>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2">
                    <Button variant="ghost" className="flex items-center gap-2 text-[12px] font-bold text-red-500">
                        <RotateCcw size={20} />
                        Reset Filters
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default FilterBar