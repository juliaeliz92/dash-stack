import { Dashboard, Products, Favorites, Inbox } from "@/pages";
import { Mail, Star, Send, Pencil, TriangleAlert, MessageCircleCheck, Trash2 } from "lucide-react";

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
                    page: <Inbox />
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

const products = [
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

const inboxDefaultLabels = [
    {
        name: "primary",
        color: "bg-green-500"
    },
    {
        name: "social",
        color: "bg-blue-500"
    },
    {
        name: "work",
        color: "bg-orange-500"
    },
    {
        name: "friends",
        color: "bg-purple-500"
    }
]

export { navigation, products, inboxMenu, inboxDefaultLabels }