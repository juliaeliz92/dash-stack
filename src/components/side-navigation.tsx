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

const navigation = [
    {
        group: {
            items: [
                {
                    name: "Dashboard",
                    link: "/"
                },
                {
                    name: "Products",
                    link: "/products"
                },
                {
                    name: "Favorites",
                    link: "/favorites"
                },
                {
                    name: "Inbox",
                    link: "/inbox"
                },
                {
                    name: "Order Lists",
                    link: "/order-lists"
                },
                {
                    name: "Product Stocks",
                    link: "/product-stocks"
                }
            ]
        }
    }, 
    {
        group: {
            header: "Pages",
            items: [
                {
                    name: "Pricing",
                    link: "/pricing"
                },
                {
                    name: "Calender",
                    link: "/calender"
                },
                {
                    name: "To-Do",
                    link: "/to-do"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Invoice",
                    link: "/invoice"
                },
                {
                    name: "Team",
                    link: "/team"
                },
                {
                    name: "Table",
                    link: "/table"
                }
            ]
        }
    },
    {
        group: {
            items: [
                {
                    name: "Settings",
                    link: "/settings"
                },
                {
                    name: "Logout",
                    link: "/logout"
                }
            ]
        }
    }
]

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
                <>
                    <SidebarGroup key={index} {...nav.group.header && { header: nav.group.header }}>
                        {nav.group.header && <SidebarGroupLabel>{nav.group.header}</SidebarGroupLabel>}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {nav.group.items.map((item, index) => (
                                    <SidebarMenuItem key={index} className={`pl-16 py-4 hover:bg-primary hover:text-white rounded-sm ${location.pathname === item.link ? "bg-primary text-white" : ""}`}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </SidebarMenuItem>
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