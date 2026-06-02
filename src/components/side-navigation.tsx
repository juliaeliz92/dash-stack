import { Link, useLocation } from "react-router"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarHeader
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import SearchInput from "./search-input"
import NavbarMenu from "./navbar-menu"
import Title from "./title"
import { navigation } from "@/constants.tsx"

export function SideNavigation() {

    const location = useLocation();
    return (<Sidebar className="overflow-auto">
        <SidebarContent className="bg-white dark:bg-gray-900">
            <SidebarHeader>
                <div className="hidden md:block md:mt-4">
                    <Title />
                </div>
                <div className="md:hidden">
                    <NavbarMenu />
                    <SearchInput />
                </div>
            </SidebarHeader>
            {navigation.map((nav, index) => (
                <div key={index}>
                    <SidebarGroup {...nav.group.header && { header: nav.group.header }}>
                        {nav.group.header && <SidebarGroupLabel>{nav.group.header}</SidebarGroupLabel>}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {nav.group.items.map((item, index1) => (
                                    <SidebarMenuItem key={index1} className={`pl-16 py-4 hover:bg-primary hover:text-white rounded-sm ${location.pathname === item.link ? "bg-primary text-white" : ""}`}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <Separator/>
                </div>
            ))}
        </SidebarContent>
    </Sidebar>)
}

export default SideNavigation