import { Dashboard, Products, Favorites, Inbox } from "@/pages";
import { Mail, Star, Send, Pencil, TriangleAlert, MessageCircleCheck, Trash2 } from "lucide-react";
import type { SalesInsight, SalesChartDataProps, ProductDealProps, OfferCarouselData, ProductProps, InboxTableColumn } from "@/types"
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
        borderColor: "border-green-600",
        checkedBackgroundColor: "data-[state=checked]:bg-green-600",
        checkedBorderColor: "data-[state=checked]:border-green-600"
    },
    {
        name: "social",
        borderColor: "border-blue-600",
        checkedBackgroundColor: "data-[state=checked]:bg-blue-600",
        checkedBorderColor: "data-[state=checked]:border-blue-600"
    },
    {
        name: "work",
        borderColor: "border-orange-600",
        checkedBackgroundColor: "data-[state=checked]:bg-orange-600",
        checkedBorderColor: "data-[state=checked]:border-orange-600"
    },
    {
        name: "friends",
        borderColor: "border-purple-600",
        checkedBackgroundColor: "data-[state=checked]:bg-purple-600",
        checkedBorderColor: "data-[state=checked]:border-purple-600"
    }
]

const inboxList: InboxTableColumn[] = [
    {   
        senderName: "Mia Chen",
        senderAddress: "mia.chen@example.com",
        emailSubject: "Meeting notes and next steps",
        lastModifiedDate: "2026-06-25",
        isStarred: true,
        label: labels.primary,
        conversation: [
            {
                name: "Mia Chen",
                content: "Hi team, I attached the meeting notes and outlined the next actions.",
                timestamp: "09:12 AM"
            },
            {
                name: "Alex Rivera",
                content: "Thanks, Mia. I will review these and update the task list by EOD.",
                timestamp: "09:45 AM"
            }
        ]
    },
    {
        senderName: "Noah Patel",
        senderAddress: "noah.patel@company.com",
        emailSubject: "Product roadmap update",
        lastModifiedDate: "2026-06-24",
        isStarred: false,
        label: labels.work,
        conversation: [
            {
                name: "Noah Patel",
                content: "Please find the updated roadmap for Q3 attached.",
                timestamp: "04:30 PM"
            },
            {
                name: "Lina Baker",
                content: "Looks good. Can you clarify the release window for the mobile update?",
                timestamp: "04:52 PM"
            }
        ]
    },
    {
        senderName: "Sofia Alvarez",
        senderAddress: "sofia.alvarez@partner.io",
        emailSubject: "Quick feedback on the proposal",
        lastModifiedDate: "2026-06-23",
        isStarred: true,
        label: labels.primary,
        conversation: [
            {
                name: "Sofia Alvarez",
                content: "I have one suggestion to improve the proposal before we send it out.",
                timestamp: "11:05 AM"
            },
            {
                name: "You",
                content: "Thanks, Sofia. I will incorporate your feedback and resend shortly.",
                timestamp: "11:18 AM"
            }
        ]
    },
    {
        senderName: "Jordan Lee",
        senderAddress: "jordan.lee@service.net",
        emailSubject: "Invoice overdue reminder",
        lastModifiedDate: "2026-06-22",
        isStarred: false,
        label: labels.work,
        conversation: [
            {
                name: "Jordan Lee",
                content: "This is a reminder that invoice #789 is overdue. Please confirm payment status.",
                timestamp: "08:22 AM"
            },
            {
                name: "You",
                content: "We received your reminder and are processing payment today.",
                timestamp: "08:37 AM"
            }
        ]
    },
    {
        senderName: "Avery Brooks",
        senderAddress: "avery.brooks@designhub.io",
        emailSubject: "Brand refresh moodboard",
        lastModifiedDate: "2026-06-21",
        isStarred: false,
        conversation: [
            {
                name: "Avery Brooks",
                content: "I shared the new moodboard concept for the brand refresh.",
                timestamp: "02:14 PM"
            },
            {
                name: "You",
                content: "The concept looks great. Let’s run this by the creative team tomorrow.",
                timestamp: "02:29 PM"
            }
        ]
    },
    {
        senderName: "Harper Kim",
        senderAddress: "harper.kim@marketpulse.com",
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
                name: "You",
                content: "Thanks Harpers, I’ll prepare the follow-up report for Friday.",
                timestamp: "10:22 AM"
            }
        ]
    },
    {
        senderName: "Ethan Murphy",
        senderAddress: "ethan.murphy@cloudsafe.com",
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
                name: "You",
                content: "Confirmed. We’ll monitor the system and report any issues immediately.",
                timestamp: "03:55 PM"
            }
        ]
    },
    {
        senderName: "Isabella Grant",
        senderAddress: "isabella.grant@events.io",
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
                name: "You",
                content: "Please send the pricing details and attendee demographics when ready.",
                timestamp: "09:30 AM"
            }
        ]
    },
    {
        senderName: "Owen Turner",
        senderAddress: "owen.turner@fintrack.com",
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
                name: "You",
                content: "Tuesday works. I’ll send a calendar invite with the agenda.",
                timestamp: "01:52 PM"
            }
        ]
    },
    {
        senderName: "Camila Ortiz",
        senderAddress: "camila.ortiz@hrconnect.org",
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
                name: "You",
                content: "Thanks, I’ll review it and confirm the orientation schedule.",
                timestamp: "09:03 AM"
            }
        ]
    },
    {
        senderName: "Ryan Sanders",
        senderAddress: "ryan.sanders@partnerlab.com",
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
                name: "You",
                content: "Yes, I’ll talk to product and get a feasibility estimate this week.",
                timestamp: "05:27 PM"
            }
        ]
    },
    {
        senderName: "Zoe Patel",
        senderAddress: "zoe.patel@community.org",
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
                name: "You",
                content: "Fantastic news. I’ll share the updated support schedule with the team.",
                timestamp: "07:24 AM"
            }
        ]
    },
    {
        senderName: "Chloe Nguyen",
        senderAddress: "chloe.nguyen@techworks.com",
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
                name: "You",
                content: "We are finalizing the slides and will rehearse tomorrow.",
                timestamp: "12:07 PM"
            }
        ]
    },
    {
        senderName: "Liam Jackson",
        senderAddress: "liam.jackson@logistics.co",
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
                name: "You",
                content: "Please keep me posted and share the new estimated delivery date.",
                timestamp: "03:47 PM"
            }
        ]
    },
    {
        senderName: "Grace Park",
        senderAddress: "grace.park@advisory.com",
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
                name: "You",
                content: "I’m sending the draft now; please let me know if any revisions are needed.",
                timestamp: "10:18 AM"
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

export { navigation, products, inboxMenu, inboxDefaultLabels, inboxList, insightData, salesChartData, dealsData, offerCarouselData };
