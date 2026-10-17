import { useState, useEffect } from "react";
import { Funnel, RotateCcw } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button";
import { orderStatusValues, orderTypeValues } from "@/constants";
import { SelectablePills } from "@/components";

function FilterBar({ updateFilters }: { updateFilters: (dateFilter: Date | undefined, selectedOrderTypes: string[], selectedOrderStatuses: string[]) => void }) {
    const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);
    const [selectedOrderTypes, setSelectedOrderTypes] = useState<string[]>([]);
    const [selectedOrderStatuses, setSelectedOrderStatuses] = useState<string[]>([]);

    useEffect(() => {
        updateFilters(dateFilter, selectedOrderTypes, selectedOrderStatuses);
    }, [dateFilter, selectedOrderTypes, selectedOrderStatuses, updateFilters]);

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
                        {dateFilter ? dateFilter.toLocaleDateString("en-US", { dateStyle: "long" }) : "Date"}
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
                    <NavigationMenuContent className="p-4">
                        <h2 className="mb-4 text-[14px] font-semibold">Select Order Type</h2>
                        <div className="mb-4 w-[400px]">
                            <SelectablePills
                                options={orderTypeValues.map((orderType) => orderType.value)}
                                selectedOptions={selectedOrderTypes}
                                onChange={setSelectedOrderTypes}
                            />
                        </div>
                        <p className="text-[12px] text-muted-foreground">
                            *You can select multiple order types*
                        </p>
                        <div className="flex justify-center">
                            <Button variant="default" className="mt-4 text-[10px] font-bold">
                                Apply Now
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2 border-r border-gray-200">
                    <NavigationMenuTrigger className="text-[12px] font-bold">
                        Order Status
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <h3>Select Order Status</h3>
                        <div className="w-[400px] p-4">
                            <SelectablePills
                                options={orderStatusValues.map((orderStatus) => orderStatus.value)}
                                selectedOptions={selectedOrderStatuses}
                                onChange={setSelectedOrderStatuses}
                            />
                        </div>
                        <p className="text-[12px] text-muted-foreground">
                            *You can select multiple order statuses*
                        </p>
                        <div className="flex justify-center">
                            <Button variant="default" className="mt-4 text-[10px] font-bold">
                                Apply Now
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-2">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-[12px] font-bold text-red-500"
                        onClick={() => {
                            setDateFilter(undefined);
                            setSelectedOrderTypes([]);
                            setSelectedOrderStatuses([]);
                            updateFilters(undefined, [], []);
                        }}
                    >
                        <RotateCcw size={20} />
                        Reset Filters
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default FilterBar