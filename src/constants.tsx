import { Dashboard, Products, Favorites } from "@/pages";

const navigation = [
    {
        group: {
            items: [
                {
                    name: "Dashboard",
                    link: "/",
                    page: <Dashboard />
                },
                {
                    name: "Products",
                    link: "/products",
                    page: <Products />
                },
                {
                    name: "Favorites",
                    link: "/favorites",
                    page: <Favorites />
                },
                {
                    name: "Inbox",
                    link: "/inbox",
                    page: null
                },
                {
                    name: "Order Lists",
                    link: "/order-lists",
                    page: null
                },
                {
                    name: "Product Stocks",
                    link: "/product-stocks",
                    page: null
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
                    link: "/pricing",
                    page: null
                },
                {
                    name: "Calender",
                    link: "/calender",
                    page: null
                },
                {
                    name: "To-Do",
                    link: "/to-do",
                    page: null
                },
                {
                    name: "Contact",
                    link: "/contact",
                    page: null
                },
                {
                    name: "Invoice",
                    link: "/invoice",
                    page: null
                },
                {
                    name: "Team",
                    link: "/team",
                    page: null
                },
                {
                    name: "Table",
                    link: "/table",
                    page: null
                }
            ]
        }
    },
    {
        group: {
            items: [
                {
                    name: "Settings",
                    link: "/settings",
                    page: null
                },
                {
                    name: "Logout",
                    link: "/logout",
                    page: null
                }
            ]
        }
    }
]

export { navigation }