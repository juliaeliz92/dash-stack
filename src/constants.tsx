import { Dashboard, Products, Favorites, Inbox } from "@/pages";
import { Conversation, InboxContainer } from "./components/inbox/subpages";
import {
    Mail,
    Star,
    Send,
    Pencil,
    TriangleAlert,
    MessageCircleCheck,
    Trash,
    Trash2,
    Download,
    Info,
    Printer
} from "lucide-react";
import type {
    SalesInsight,
    SalesChartDataProps,
    ProductDealProps,
    OfferCarouselData,
    ProductProps,
    InboxTableColumn,
    labelColor,
    NavigationRoutes,
    ButtonGroupItem,
} from "@/types"
import { labels } from "@/types";

const insightData: SalesInsight[] = [
    { title: "Total Users", value: "1,345", changePercent: "5.2%", increase: true, time: "last month", icon: "users" },
    { title: "Total Orders", value: "12,234", changePercent: "3.8%", increase: false, time: "last week", icon: "orders" },
    { title: "Total Sales", value: "$56,789", changePercent: "7.1%", increase: false, time: "last month", icon: "sales" },
    { title: "Total Pending", value: "567", changePercent: "4.5%", increase: true, time: "yesterday", icon: "pending" },
]

const salesChartData: SalesChartDataProps[] = [
    {
        month: "January", sales: [
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
        ]
    },
    {
        month: "February", sales: [
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
        ]
    },
    {
        month: "March", sales: [
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
        ]
    },
    {
        month: "April", sales: [
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
        ]
    },
    {
        month: "May", sales: [
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
        ]
    },
    {
        month: "June", sales: [
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
        ]
    },
    {
        month: "July", sales: [
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
        ]
    },
    {
        month: "August", sales: [
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
        ]
    },
    {
        month: "September", sales: [
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
        ]
    },
    {
        month: "October", sales: [
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
        ]
    },
    {
        month: "November", sales: [
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
        ]
    },
    {
        month: "December", sales: [
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
        ]
    },
]

const navigation: NavigationRoutes[] = [
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
                    page: <Inbox />,
                    children: [
                        {
                            name: "Inbox",
                            link: "/inbox",
                            page: <InboxContainer />
                        },
                        {
                            name: "conversation",
                            link: "/inbox/conversation/:id",
                            page: <Conversation />
                        }
                ]
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

const products: ProductProps[] = [
    {
        id: 1,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 1",
        price: 29.99,
        cur: "$",
        rating: 4.5,
        reviews: 120,
    },
    {
        id: 2,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 2",
        price: 19.99,
        cur: "$",
        rating: 4.0,
        reviews: 45,
    },
    {
        id: 3,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 3",
        price: 39.99,
        cur: "$",
        rating: 4.8,
        reviews: 230,
    },
    {
        id: 4,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 4",
        price: 24.99,
        cur: "$",
        rating: 3.9,
        reviews: 18,
    },
    {
        id: 5,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 5",
        price: 49.99,
        cur: "$",
        rating: 4.7,
        reviews: 89,
    },
    {
        id: 6,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 6",
        price: 14.99,
        cur: "$",
        rating: 3.5,
        reviews: 12,
    },
    {
        id: 7,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 7",
        price: 59.99,
        cur: "$",
        rating: 4.9,
        reviews: 340,
    },
    {
        id: 8,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 8",
        price: 9.99,
        cur: "$",
        rating: 3.8,
        reviews: 7,
    },
    {
        id: 9,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 9",
        price: 34.99,
        cur: "$",
        rating: 4.2,
        reviews: 66,
    },
    {
        id: 10,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 10",
        price: 74.99,
        cur: "$",
        rating: 4.6,
        reviews: 150,
    },
    {
        id: 11,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 11",
        price: 27.5,
        cur: "$",
        rating: 4.1,
        reviews: 33,
    },
    {
        id: 12,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 12",
        price: 17.5,
        cur: "$",
        rating: 4.4,
        reviews: 140,
    },
    {
        id: 13,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 13",
        price: 20.0,
        cur: "$",
        rating: 4.7,
        reviews: 150,
    },
    {
        id: 14,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 14",
        price: 22.5,
        cur: "$",
        rating: 3.0,
        reviews: 160,
    },
    {
        id: 15,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 15",
        price: 25.0,
        cur: "$",
        rating: 3.3,
        reviews: 170,
    },
    {
        id: 16,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 16",
        price: 27.5,
        cur: "$",
        rating: 3.6,
        reviews: 180,
    },
    {
        id: 17,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 17",
        price: 30.0,
        cur: "$",
        rating: 3.9,
        reviews: 190,
    },
    {
        id: 18,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 18",
        price: 32.5,
        cur: "$",
        rating: 4.2,
        reviews: 200,
    },
    {
        id: 19,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 19",
        price: 35.0,
        cur: "$",
        rating: 4.5,
        reviews: 210,
    },
    {
        id: 20,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 20",
        price: 37.5,
        cur: "$",
        rating: 4.8,
        reviews: 220,
    },
    {
        id: 21,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 21",
        price: 40.0,
        cur: "$",
        rating: 3.1,
        reviews: 230,
    },
    {
        id: 22,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 22",
        price: 42.5,
        cur: "$",
        rating: 3.4,
        reviews: 240,
    },
    {
        id: 23,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 23",
        price: 45.0,
        cur: "$",
        rating: 3.7,
        reviews: 250,
    },
    {
        id: 24,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 24",
        price: 47.5,
        cur: "$",
        rating: 4.0,
        reviews: 260,
    },
    {
        id: 25,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 25",
        price: 50.0,
        cur: "$",
        rating: 4.3,
        reviews: 270,
    },
    {
        id: 26,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 26",
        price: 52.5,
        cur: "$",
        rating: 4.6,
        reviews: 280,
    },
    {
        id: 27,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 27",
        price: 55.0,
        cur: "$",
        rating: 4.9,
        reviews: 290,
    },
    {
        id: 28,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 28",
        price: 57.5,
        cur: "$",
        rating: 3.2,
        reviews: 300,
    },
    {
        id: 29,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 29",
        price: 60.0,
        cur: "$",
        rating: 3.5,
        reviews: 310,
    },
    {
        id: 30,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 30",
        price: 62.5,
        cur: "$",
        rating: 3.8,
        reviews: 320,
    },
    {
        id: 31,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 31",
        price: 65.0,
        cur: "$",
        rating: 4.1,
        reviews: 330,
    },
    {
        id: 32,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 32",
        price: 67.5,
        cur: "$",
        rating: 4.4,
        reviews: 340,
    },
    {
        id: 33,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 33",
        price: 70.0,
        cur: "$",
        rating: 4.7,
        reviews: 350,
    },
    {
        id: 34,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 34",
        price: 72.5,
        cur: "$",
        rating: 3.0,
        reviews: 360,
    },
    {
        id: 35,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 35",
        price: 75.0,
        cur: "$",
        rating: 3.3,
        reviews: 370,
    },
    {
        id: 36,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 36",
        price: 77.5,
        cur: "$",
        rating: 3.6,
        reviews: 380,
    },
    {
        id: 37,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 37",
        price: 80.0,
        cur: "$",
        rating: 3.9,
        reviews: 390,
    },
    {
        id: 38,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 38",
        price: 82.5,
        cur: "$",
        rating: 4.2,
        reviews: 400,
    },
    {
        id: 39,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 39",
        price: 85.0,
        cur: "$",
        rating: 4.5,
        reviews: 410,
    },
    {
        id: 40,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 40",
        price: 87.5,
        cur: "$",
        rating: 4.8,
        reviews: 420,
    },
    {
        id: 41,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 41",
        price: 90.0,
        cur: "$",
        rating: 3.1,
        reviews: 430,
    },
    {
        id: 42,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 42",
        price: 92.5,
        cur: "$",
        rating: 3.4,
        reviews: 440,
    },
    {
        id: 43,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 43",
        price: 95.0,
        cur: "$",
        rating: 3.7,
        reviews: 450,
    },
    {
        id: 44,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 44",
        price: 97.5,
        cur: "$",
        rating: 4.0,
        reviews: 460,
    },
    {
        id: 45,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 45",
        price: 100.0,
        cur: "$",
        rating: 4.3,
        reviews: 470,
    },
    {
        id: 46,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 46",
        price: 102.5,
        cur: "$",
        rating: 4.6,
        reviews: 480,
    },
    {
        id: 47,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 47",
        price: 105.0,
        cur: "$",
        rating: 4.9,
        reviews: 490,
    },
    {
        id: 48,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 48",
        price: 107.5,
        cur: "$",
        rating: 3.2,
        reviews: 500,
    },
    {
        id: 49,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 49",
        price: 110.0,
        cur: "$",
        rating: 3.5,
        reviews: 510,
    },
    {
        id: 50,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 50",
        price: 112.5,
        cur: "$",
        rating: 3.8,
        reviews: 520,
    },
    {
        id: 51,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 51",
        price: 115.0,
        cur: "$",
        rating: 4.1,
        reviews: 530,
    },
    {
        id: 52,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 52",
        price: 117.5,
        cur: "$",
        rating: 4.4,
        reviews: 540,
    },
    {
        id: 53,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 53",
        price: 120.0,
        cur: "$",
        rating: 4.7,
        reviews: 550,
    },
    {
        id: 54,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 54",
        price: 122.5,
        cur: "$",
        rating: 3.0,
        reviews: 560,
    },
    {
        id: 55,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 55",
        price: 125.0,
        cur: "$",
        rating: 3.3,
        reviews: 570,
    },
    {
        id: 56,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 56",
        price: 127.5,
        cur: "$",
        rating: 3.6,
        reviews: 580,
    },
    {
        id: 57,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 57",
        price: 130.0,
        cur: "$",
        rating: 3.9,
        reviews: 590,
    },
    {
        id: 58,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 58",
        price: 132.5,
        cur: "$",
        rating: 4.2,
        reviews: 600,
    },
    {
        id: 59,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 59",
        price: 135.0,
        cur: "$",
        rating: 4.5,
        reviews: 610,
    },
    {
        id: 60,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 60",
        price: 137.5,
        cur: "$",
        rating: 4.8,
        reviews: 620,
    },
    {
        id: 61,
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 61",
        price: 140.0,
        cur: "$",
        rating: 3.1,
        reviews: 630,
    },
]

const inboxMenu = [
    {
        name: "Inbox",
        link: "/inbox",
        icon: <Mail className="w-5 h-5" />,
        page: null,
        count: 1232
    },
    {
        name: "Starred",
        link: "/starred",
        icon: <Star className="w-5 h-5" />,
        page: null,
        count: 45
    },
    {
        name: "Sent",
        link: "/sent",
        icon: <Send className="w-5 h-5" />,
        page: null,
        count: 67
    },
    {
        name: "Drafts",
        link: "/drafts",
        icon: <Pencil className="w-5 h-5" />,
        page: null,
        count: 12
    },
    {
        name: "Spam",
        link: "/spam",
        icon: <TriangleAlert className="w-5 h-5" />,
        page: null,
        count: 34
    },
    {
        name: "Important",
        link: "/important",
        icon: <MessageCircleCheck className="w-5 h-5" />,
        page: null,
        count: 56
    },
    {
        name: "Trash",
        link: "/trash",
        icon: <Trash2 className="w-5 h-5" />,
        page: null,
        count: 8
    }
]

const inboxDefaultLabels: labelColor[] = [
    {
        value: "primary",
        borderColor: "border-green-600",
        checkedBackgroundColor: "data-[state=checked]:bg-green-600",
        checkedBorderColor: "data-[state=checked]:border-green-600",
        backgroundColor: "bg-green-200",
        textColor: "text-green-600"
    },
    {
        value: "social",
        borderColor: "border-blue-600",
        checkedBackgroundColor: "data-[state=checked]:bg-blue-600",
        checkedBorderColor: "data-[state=checked]:border-blue-600",
        backgroundColor: "bg-blue-200",
        textColor: "text-blue-600"
    },
    {
        value: "work",
        borderColor: "border-orange-600",
        checkedBackgroundColor: "data-[state=checked]:bg-orange-600",
        checkedBorderColor: "data-[state=checked]:border-orange-600",
        backgroundColor: "bg-orange-200",
        textColor: "text-orange-600"
    },
    {
        value: "friends",
        borderColor: "border-purple-600",
        checkedBackgroundColor: "data-[state=checked]:bg-purple-600",
        checkedBorderColor: "data-[state=checked]:border-purple-600",
        backgroundColor: "bg-purple-200",
        textColor: "text-purple-600"
    }
]

const inboxList: InboxTableColumn[] = [
    {   
        id: 1,
        senderName: "Mia Chen",
        senderEmail: "mia.chen@example.com",
        emailSubject: "Meeting notes and next steps",
        lastModifiedDate: "2026-08-03 09:12 AM",
        isStarred: true,
        label: labels.primary,
        conversation: [
            {
                name: "Mia Chen",
                content: "Hi team, I attached the meeting notes and outlined the next actions.",
                timestamp: "09:12 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, Mia. I will review these and update the task list by EOD.",
                timestamp: "09:45 AM"
            },
            {
                name: "Mia Chen",
                content: "Perfect. I also added the action owners to the notes so we can track accountability across design, engineering, and marketing.",
                timestamp: "10:03 AM"
            },
            {
                name: "Jane Doe",
                content: "Great, I’ll share the revised timeline with the group and flag the items that need sign-off before Friday.",
                timestamp: "10:18 AM"
            },
            {
                name: "Mia Chen",
                content: "Thanks! Please also let me know if you want me to send a quick recap to stakeholders after the review call.",
                timestamp: "10:27 AM"
            }
        ]
    },
    {
        id: 2,
        senderName: "Noah Patel",
        senderEmail: "noah.patel@company.com",
        emailSubject: "Product roadmap update",
        lastModifiedDate: "2026-08-03 11:30 AM",
        isStarred: false,
        label: labels.work,
        conversation: [
            {
                name: "Noah Patel",
                content: "Please find the updated roadmap for Q3 attached.",
                timestamp: "04:30 PM"
            },
            {
                name: "Jane Doe",
                content: "Looks good. Can you clarify the release window for the mobile update?",
                timestamp: "04:52 PM"
            }
        ]
    },
    {
        id: 3,
        senderName: "Sofia Alvarez",
        senderEmail: "sofia.alvarez@partner.io",
        emailSubject: "Quick feedback on the proposal",
        lastModifiedDate: "2026-08-03 01:15 PM",
        isStarred: true,
        label: labels.primary,
        conversation: [
            {
                name: "Sofia Alvarez",
                content: "I have one suggestion to improve the proposal before we send it out.",
                timestamp: "11:05 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, Sofia. I will incorporate your feedback and resend shortly.",
                timestamp: "11:18 AM"
            }
        ]
    },
    {
        id: 4,
        senderName: "Jordan Lee",
        senderEmail: "jordan.lee@service.net",
        emailSubject: "Invoice overdue reminder",
        lastModifiedDate: "2026-08-03 03:40 PM",
        isStarred: false,
        label: labels.work,
        conversation: [
            {
                name: "Jordan Lee",
                content: "This is a reminder that invoice #789 is overdue. Please confirm payment status.",
                timestamp: "08:22 AM"
            },
            {
                name: "Jane Doe",
                content: "We received your reminder and are processing payment today.",
                timestamp: "08:37 AM"
            }
        ]
    },
    {
        id: 5,
        senderName: "Avery Brooks",
        senderEmail: "avery.brooks@designhub.io",
        emailSubject: "Brand refresh moodboard",
        lastModifiedDate: "2026-08-03 05:05 PM",
        isStarred: false,
        conversation: [
            {
                name: "Avery Brooks",
                content: "I shared the new moodboard concept for the brand refresh.",
                timestamp: "02:14 PM"
            },
            {
                name: "Jane Doe",
                content: "The concept looks great. Let’s run this by the creative team tomorrow.",
                timestamp: "02:29 PM"
            }
        ]
    },
    {
        id: 6,
        senderName: "Harper Kim",
        senderEmail: "harper.kim@marketpulse.com",
        emailSubject: "Campaign performance review",
        lastModifiedDate: "2026-06-20",
        isStarred: false,
        conversation: [
            {
                name: "Harper Kim",
                content: "Here is the campaign performance summary for last week.",
                timestamp: "10:05 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks Harpers, I’ll prepare the follow-up report for Friday.",
                timestamp: "10:22 AM"
            }
        ]
    },
    {
        id: 7,
        senderName: "Ethan Murphy",
        senderEmail: "ethan.murphy@cloudsafe.com",
        emailSubject: "Security patch rollout",
        lastModifiedDate: "2026-06-19",
        isStarred: true,
        label: labels.friends,
        conversation: [
            {
                name: "Ethan Murphy",
                content: "The security patch rollout is scheduled for tonight at 11 PM.",
                timestamp: "03:40 PM"
            },
            {
                name: "Jane Doe",
                content: "Confirmed. We’ll monitor the system and report any issues immediately.",
                timestamp: "03:55 PM"
            }
        ]
    },
    {
        id: 8,
        senderName: "Isabella Grant",
        senderEmail: "isabella.grant@events.io",
        emailSubject: "Conference sponsorship options",
        lastModifiedDate: "2026-06-18",
        isStarred: false,
        conversation: [
            {
                name: "Isabella Grant",
                content: "I wanted to confirm the sponsorship tiers for the upcoming conference.",
                timestamp: "09:18 AM"
            },
            {
                name: "Jane Doe",
                content: "Please send the pricing details and attendee demographics when ready.",
                timestamp: "09:30 AM"
            }
        ]
    },
    {
        id: 9,
        senderName: "Owen Turner",
        senderEmail: "owen.turner@fintrack.com",
        emailSubject: "Quarterly budget review",
        lastModifiedDate: "2026-06-17",
        isStarred: true,
        conversation: [
            {
                name: "Owen Turner",
                content: "Can we schedule a budget review for the finance team next Tuesday?",
                timestamp: "01:45 PM"
            },
            {
                name: "Jane Doe",
                content: "Tuesday works. I’ll send a calendar invite with the agenda.",
                timestamp: "01:52 PM"
            }
        ]
    },
    {
        id: 10,
        senderName: "Camila Ortiz",
        senderEmail: "camila.ortiz@hrconnect.org",
        emailSubject: "New hire onboarding checklist",
        lastModifiedDate: "2026-06-16",
        isStarred: false,
        conversation: [
            {
                name: "Camila Ortiz",
                content: "I’ve attached the onboarding checklist for the new hires starting next week.",
                timestamp: "08:50 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll review it and confirm the orientation schedule.",
                timestamp: "09:03 AM"
            }
        ]
    },
    {
        id: 11,
        senderName: "Ryan Sanders",
        senderEmail: "ryan.sanders@partnerlab.com",
        emailSubject: "Feature request for analytics dashboard",
        lastModifiedDate: "2026-06-15",
        isStarred: true,
        conversation: [
            {
                name: "Ryan Sanders",
                content: "Could we add a custom filter option to the analytics dashboard?",
                timestamp: "05:12 PM"
            },
            {
                name: "Jane Doe",
                content: "Yes, I’ll talk to product and get a feasibility estimate this week.",
                timestamp: "05:27 PM"
            }
        ]
    },
    {
        id: 12,
        senderName: "Zoe Patel",
        senderEmail: "zoe.patel@community.org",
        emailSubject: "Volunteer coordination update",
        lastModifiedDate: "2026-06-14",
        isStarred: false,
        label: labels.social,
        conversation: [
            {
                name: "Zoe Patel",
                content: "Volunteer sign-ups have exceeded expectations for this weekend.",
                timestamp: "07:10 AM"
            },
            {
                name: "Jane Doe",
                content: "Fantastic news. I’ll share the updated support schedule with the team.",
                timestamp: "07:24 AM"
            }
        ]
    },
    {
        id: 13,
        senderName: "Chloe Nguyen",
        senderEmail: "chloe.nguyen@techworks.com",
        emailSubject: "Client demo preparation",
        lastModifiedDate: "2026-06-13",
        isStarred: true,
        conversation: [
            {
                name: "Chloe Nguyen",
                content: "Are we ready for the client demo on Friday afternoon?",
                timestamp: "11:55 AM"
            },
            {
                name: "Jane Doe",
                content: "We are finalizing the slides and will rehearse tomorrow.",
                timestamp: "12:07 PM"
            }
        ]
    },
    {
        id: 14,
        senderName: "Liam Jackson",
        senderEmail: "liam.jackson@logistics.co",
        emailSubject: "Shipment tracking issue",
        lastModifiedDate: "2026-06-12",
        isStarred: false,
        conversation: [
            {
                name: "Liam Jackson",
                content: "There’s a delay in the shipment due to customs processing.",
                timestamp: "03:33 PM"
            },
            {
                name: "Jane Doe",
                content: "Please keep me posted and share the new estimated delivery date.",
                timestamp: "03:47 PM"
            }
        ]
    },
    {
        id: 15,
        senderName: "Grace Park",
        senderEmail: "grace.park@advisory.com",
        emailSubject: "Legal review request",
        lastModifiedDate: "2026-06-11",
        isStarred: true,
        conversation: [
            {
                name: "Grace Park",
                content: "Can you send the contract draft for legal review by EOD?",
                timestamp: "10:02 AM"
            },
            {
                name: "Jane Doe",
                content: "I’m sending the draft now; please let me know if any revisions are needed.",
                timestamp: "10:18 AM"
            }
        ]
    },
    {
        id: 16,
        senderName: "Nina Flores",
        senderEmail: "nina.flores@studio.co",
        emailSubject: "Design system updates",
        lastModifiedDate: "2026-06-10",
        isStarred: false,
        label: labels.work,
        conversation: [
            {
                name: "Nina Flores",
                content: "I pushed the latest design system updates and shared the preview link.",
                timestamp: "01:10 PM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll review the tokens and component spacing changes today.",
                timestamp: "01:26 PM"
            }
        ]
    },
    {
        id: 17,
        senderName: "Marcus Bell",
        senderEmail: "marcus.bell@northwind.com",
        emailSubject: "Supplier delivery confirmation",
        lastModifiedDate: "2026-06-09",
        isStarred: true,
        label: labels.primary,
        conversation: [
            {
                name: "Marcus Bell",
                content: "The supplier confirmed the shipment will arrive before noon tomorrow.",
                timestamp: "09:48 AM"
            },
            {
                name: "Jane Doe",
                content: "Perfect, I’ll update the receiving schedule and notify the team.",
                timestamp: "09:57 AM"
            }
        ]
    },
    {
        id: 18,
        senderName: "Priya Shah",
        senderEmail: "priya.shah@launchpad.io",
        emailSubject: "Launch checklist for Friday",
        lastModifiedDate: "2026-06-08",
        isStarred: false,
        label: labels.social,
        conversation: [
            {
                name: "Priya Shah",
                content: "Can you confirm the final launch checklist before the Friday rehearsal?",
                timestamp: "04:05 PM"
            },
            {
                name: "Jane Doe",
                content: "Yes, I’ll send the finalized checklist in a few minutes.",
                timestamp: "04:16 PM"
            }
        ]
    },
    {
        id: 19,
        senderName: "Daniel Kim",
        senderEmail: "daniel.kim@atlas.dev",
        emailSubject: "Weekly engineering sync",
        lastModifiedDate: "2026-06-07",
        isStarred: true,
        label: labels.friends,
        conversation: [
            {
                name: "Daniel Kim",
                content: "The weekly engineering sync is set for tomorrow morning at 10 AM.",
                timestamp: "06:20 PM"
            },
            {
                name: "Jane Doe",
                content: "Great, I’ll add the agenda items and share the invite shortly.",
                timestamp: "06:31 PM"
            }
        ]
    },
    {
        id: 20,
        senderName: "Ella Thompson",
        senderEmail: "ella.thompson@brightlabs.com",
        emailSubject: "Customer interview notes",
        lastModifiedDate: "2026-06-06",
        isStarred: false,
        label: labels.primary,
        conversation: [
            {
                name: "Ella Thompson",
                content: "I attached the customer interview notes from yesterday’s sessions.",
                timestamp: "11:40 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll synthesize the feedback and share the summary this afternoon.",
                timestamp: "11:52 AM"
            }
        ]
    },
    {
        id: 21,
        senderName: "Samuel Ortiz",
        senderEmail: "samuel.ortiz@northstar.io",
        emailSubject: "Board meeting agenda",
        lastModifiedDate: "2026-06-05",
        isStarred: true,
        label: labels.work,
        conversation: [
            {
                name: "Samuel Ortiz",
                content: "Please review the draft agenda for the board meeting next week.",
                timestamp: "08:05 AM"
            },
            {
                name: "Jane Doe",
                content: "I’ll review it and send comments before the end of the day.",
                timestamp: "08:19 AM"
            }
        ]
    },
    {
        id: 22,
        senderName: "Maya Singh",
        senderEmail: "maya.singh@greenline.org",
        emailSubject: "Community outreach plan",
        lastModifiedDate: "2026-06-04",
        isStarred: false,
        label: labels.social,
        conversation: [
            {
                name: "Maya Singh",
                content: "Here is the updated community outreach plan for the month.",
                timestamp: "03:12 PM"
            },
            {
                name: "Jane Doe",
                content: "Looks good, I’ll share it with the regional team tomorrow.",
                timestamp: "03:24 PM"
            }
        ]
    },
    {
        id: 23,
        senderName: "Jasper Cole",
        senderEmail: "jasper.cole@pixelcraft.dev",
        emailSubject: "Prototype feedback request",
        lastModifiedDate: "2026-06-03",
        isStarred: true,
        label: labels.friends,
        conversation: [
            {
                name: "Jasper Cole",
                content: "Could you take a look at the latest prototype and share any feedback?",
                timestamp: "01:00 PM"
            },
            {
                name: "Jane Doe",
                content: "Absolutely, I’ll send my notes after I review the interactions.",
                timestamp: "01:15 PM"
            }
        ]
    },
    {
        id: 24,
        senderName: "Lila Brooks",
        senderEmail: "lila.brooks@sunrise.net",
        emailSubject: "Travel reimbursement form",
        lastModifiedDate: "2026-06-02",
        isStarred: false,
        conversation: [
            {
                name: "Lila Brooks",
                content: "I attached the travel reimbursement form for your review.",
                timestamp: "09:30 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll complete it and send it to finance today.",
                timestamp: "09:42 AM"
            }
        ]
    },
    {
        id: 25,
        senderName: "Henry Adams",
        senderEmail: "henry.adams@warehouseplus.com",
        emailSubject: "Inventory variance report",
        lastModifiedDate: "2026-06-01",
        isStarred: true,
        label: labels.work,
        conversation: [
            {
                name: "Henry Adams",
                content: "The inventory variance report shows a few discrepancies to investigate.",
                timestamp: "05:55 PM"
            },
            {
                name: "Jane Doe",
                content: "I’ll review the numbers and follow up with the warehouse team.",
                timestamp: "06:07 PM"
            }
        ]
    },
    {
        id: 26,
        senderName: "Sophia Reed",
        senderEmail: "sophia.reed@meridian.app",
        emailSubject: "Quarterly goals update",
        lastModifiedDate: "2026-05-31",
        isStarred: false,
        label: labels.primary,
        conversation: [
            {
                name: "Sophia Reed",
                content: "I attached the quarterly goals update for the team review.",
                timestamp: "10:18 AM"
            },
            {
                name: "Jane Doe",
                content: "Perfect, I’ll review the targets and share feedback by noon.",
                timestamp: "10:29 AM"
            }
        ]
    },
    {
        id: 27,
        senderName: "Oliver James",
        senderEmail: "oliver.james@tideworks.com",
        emailSubject: "Vendor onboarding packet",
        lastModifiedDate: "2026-05-30",
        isStarred: true,
        label: labels.social,
        conversation: [
            {
                name: "Oliver James",
                content: "The vendor onboarding packet is ready for your review.",
                timestamp: "02:40 PM"
            },
            {
                name: "Jane Doe",
                content: "Great, I’ll review the compliance items and send approval.",
                timestamp: "02:53 PM"
            }
        ]
    },
    {
        id: 28,
        senderName: "Amara Lewis",
        senderEmail: "amara.lewis@lumen.ai",
        emailSubject: "AI model evaluation results",
        lastModifiedDate: "2026-05-29",
        isStarred: false,
        conversation: [
            {
                name: "Amara Lewis",
                content: "The latest AI model evaluation results are ready for review.",
                timestamp: "04:22 PM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll compare them with the previous benchmark this evening.",
                timestamp: "04:34 PM"
            }
        ]
    },
    {
        id: 29,
        senderName: "Theo Martinez",
        senderEmail: "theo.martinez@clearsense.com",
        emailSubject: "Customer retention strategy",
        lastModifiedDate: "2026-05-28",
        isStarred: true,
        label: labels.work,
        conversation: [
            {
                name: "Theo Martinez",
                content: "I drafted a new customer retention strategy for the next quarter.",
                timestamp: "07:08 AM"
            },
            {
                name: "Jane Doe",
                content: "Excellent, I’ll review the recommendations and provide feedback tomorrow.",
                timestamp: "07:19 AM"
            }
        ]
    },
    {
        id: 30,
        senderName: "Isla Bennett",
        senderEmail: "isla.bennett@harbor.io",
        emailSubject: "Event sponsorship follow-up",
        lastModifiedDate: "2026-05-27",
        isStarred: false,
        label: labels.primary,
        conversation: [
            {
                name: "Isla Bennett",
                content: "Can you follow up with the event sponsors before the end of the week?",
                timestamp: "12:15 PM"
            },
            {
                name: "Jane Doe",
                content: "Absolutely, I’ll send the follow-up notes this afternoon.",
                timestamp: "12:27 PM"
            }
        ]
    },
    {
        id: 31,
        senderName: "Caleb Foster",
        senderEmail: "caleb.foster@evergreen.co",
        emailSubject: "Sustainability report draft",
        lastModifiedDate: "2026-05-26",
        isStarred: true,
        label: labels.friends,
        conversation: [
            {
                name: "Caleb Foster",
                content: "I shared the sustainability report draft for your review.",
                timestamp: "06:42 PM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll review the metrics and send comments tonight.",
                timestamp: "06:55 PM"
            }
        ]
    },
    {
        id: 32,
        senderName: "Ruby Nguyen",
        senderEmail: "ruby.nguyen@bluepeak.com",
        emailSubject: "Partnership proposal outline",
        lastModifiedDate: "2026-05-25",
        isStarred: false,
        label: labels.social,
        conversation: [
            {
                name: "Ruby Nguyen",
                content: "I drafted an outline for the partnership proposal and shared it here.",
                timestamp: "03:06 PM"
            },
            {
                name: "Jane Doe",
                content: "Perfect, I’ll review it and suggest a few edits tomorrow.",
                timestamp: "03:18 PM"
            }
        ]
    },
    {
        id: 33,
        senderName: "Elias Parker",
        senderEmail: "elias.parker@mountainlabs.io",
        emailSubject: "Infrastructure upgrade plan",
        lastModifiedDate: "2026-05-24",
        isStarred: true,
        label: labels.work,
        conversation: [
            {
                name: "Elias Parker",
                content: "The infrastructure upgrade plan is ready for stakeholder review.",
                timestamp: "08:40 AM"
            },
            {
                name: "Jane Doe",
                content: "Great, I’ll circulate it to the relevant teams after lunch.",
                timestamp: "08:51 AM"
            }
        ]
    },
    {
        id: 34,
        senderName: "Tessa Ward",
        senderEmail: "tessa.ward@echohealth.org",
        emailSubject: "Patient feedback summary",
        lastModifiedDate: "2026-05-23",
        isStarred: false,
        conversation: [
            {
                name: "Tessa Ward",
                content: "I attached the patient feedback summary from this week’s surveys.",
                timestamp: "10:05 AM"
            },
            {
                name: "Jane Doe",
                content: "Thanks, I’ll review the trends and share a short report later.",
                timestamp: "10:16 AM"
            }
        ]
    },
    {
        id: 35,
        senderName: "Jonah Brooks",
        senderEmail: "jonah.brooks@signalpay.com",
        emailSubject: "Payment processing alert",
        lastModifiedDate: "2026-05-22",
        isStarred: true,
        label: labels.primary,
        conversation: [
            {
                name: "Jonah Brooks",
                content: "We saw an unusual spike in payment processing activity this morning.",
                timestamp: "05:14 PM"
            },
            {
                name: "Jane Doe",
                content: "I’m investigating and will update the incident channel shortly.",
                timestamp: "05:27 PM"
            }
        ]
    },
    {
        id: 36,
        senderName: "Zara Collins",
        senderEmail: "zara.collins@daybreak.ai",
        emailSubject: "Research findings summary",
        lastModifiedDate: "2026-05-21",
        isStarred: false,
        label: labels.work,
        conversation: [
            {
                name: "Zara Collins",
                content: "I summarized the latest research findings for the product team.",
                timestamp: "01:28 PM"
            },
            {
                name: "Jane Doe",
                content: "Excellent, I’ll review the insights and integrate them into the roadmap.",
                timestamp: "01:39 PM"
            }
        ]
    },
    {
        id: 37,
        senderName: "Noah Brooks",
        senderEmail: "noah.brooks@brightpath.dev",
        emailSubject: "Release readiness checklist",
        lastModifiedDate: "2026-05-20",
        isStarred: true,
        label: labels.friends,
        conversation: [
            {
                name: "Noah Brooks",
                content: "The release readiness checklist is ready for sign-off.",
                timestamp: "04:48 PM"
            },
            {
                name: "Jane Doe",
                content: "Perfect, I’ll confirm the pending items before the release window.",
                timestamp: "04:59 PM"
            }
        ]
    }
]

const dealsData: ProductDealProps[] = [
    { productName: "Laptop Dell", imageURL: "https://picsum.photos/id/0/200/300", location: "New York", dateTime: "2024-06-01 10:00", piece: 10, amount: "$1000", status: "Delivered" },
    { productName: "White Stilettos", imageURL: "https://picsum.photos/id/21/200/300", location: "Los Angeles", dateTime: "2024-06-02 14:30", piece: 5, amount: "$500", status: "Pending" },
    { productName: "Xbox Controller", imageURL: "https://picsum.photos/id/96/200/300", location: "Chicago", dateTime: "2024-06-03 09:15", piece: 20, amount: "$2000", status: "Rejected" },
]

const offerCarouselData: OfferCarouselData[] = [
    { dateRange: "September 12-22", title: "Enjoy free home delivery in this summer", caption: "Designer Dresses - Pick from trendy Designer Dress.", buttonText: "Get Started", backgroundColor: "bg-blue-400", buttonColor: "bg-orange-500 hover:bg-orange-600" },
    { dateRange: "October 1-15", title: "Special discounts on selected items", caption: "Up to 30% off on a wide range of products.", buttonText:"Shop Now", backgroundColor: "bg-green-500", buttonColor: "bg-orange-500 hover:bg-orange-600" },
    { dateRange: "November 10-25", title: "Holiday sale is here!", caption: "Get ready for the most wonderful time of the year with exclusive deals.", buttonText: "Explore Deals", backgroundColor: "bg-pink-400", buttonColor: "bg-yellow-500 hover:bg-yellow-600" }
]

const inboxTableColumnId = {
    id: "id",
    senderName: "senderName",
    senderEmail: "senderEmail",
    emailSubject: "emailSubject",
    lastModifiedDate: "lastModifiedDate",
    isStarred: "isStarred",
    label: "label",
}

const inboxTableButtonGroups: ButtonGroupItem[] =[
    {
        name: "Download",
        icon: <Download size={16} />,
        onClick: () => {
            console.log("Download button clicked");
        }
    },
    {
        name: "Info",
        icon: <Info size={16} />,
        onClick: () => {
            console.log("Info button clicked");
        }
    },
    {
        name: "Delete",
        icon: <Trash size={16} />,
        onClick: () => {
            console.log("Delete button clicked");
        }
    }
]

const conversationButtonGroup: ButtonGroupItem[] = [
    {
        name: "Print",
        icon: <Printer size={16} />,
        onClick: () => {
            console.log("Print button clicked");
        }
    },
    {
        name: "Favorite",
        icon: <Star size={16} />,
        onClick: () => {
            console.log("Favorite button clicked");
        }
    },
    {
        name: "Delete",
        icon: <Trash size={16} />,
        onClick: () => {
            console.log("Delete button clicked");
        }
    }
]

export {
    navigation,
    products,
    inboxMenu,
    inboxDefaultLabels,
    inboxList,
    insightData,
    salesChartData,
    dealsData,
    offerCarouselData,
    inboxTableColumnId,
    inboxTableButtonGroups,
    conversationButtonGroup
};
