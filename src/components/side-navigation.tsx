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

const navigation = [
    {
        group: {
            items: [
                "Dashboard",
                "Products",
                "Favorites",
                "Inbox",
                "Order Lists",
                "Product Stocks"
            ]
        }
    }, 
    {
        group: {
            header: "Pages",
            items: [
                "Pricing",
                "Calender",
                "To-Do",
                "Contact",
                "Invoice",
                "Team",
                "Table"
            ]
        }
    },
    {
        group: {
            items: [
                "Settings",
                "Logout"
            ]
        }
    }
]

export function SideNavigation() {
    return (<Sidebar>
        <SidebarContent>
            <SidebarHeader>
                <div className="hidden md:block md:mt-4">
                    <Title />
                </div>
                <div className="md:hidden">
                    <NavbarMenu />
                    <SearchInput />
                </div>
            </SidebarHeader>
            <Separator className="mt-2"/>
            {navigation.map((nav, index) => (
                <>
                    <SidebarGroup key={index} {...nav.group.header && { header: nav.group.header }}>
                        {nav.group.header && <SidebarGroupLabel>{nav.group.header}</SidebarGroupLabel>}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {nav.group.items.map((item, index) => (
                                    <SidebarMenuItem key={index} className="pl-16 py-4 hover:bg-primary hover:text-white rounded-sm">{item}</SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <Separator/>
                </>
            ))}
        </SidebarContent>
    </Sidebar>)
}

export default SideNavigation