import type { ReactNode } from "react";
import type { ColumnDef } from "@tanstack/react-table"

type labelColor = {
    value: string;
    borderColor: string;
    checkedBackgroundColor: string;
    checkedBorderColor: string;
    backgroundColor?: string;
    textColor?: string;
}

const labels = {
    primary: "Primary",
    social: "Social",
    work: "Work",
    friends: "Friends"
}

type inboxListItem = {
    senderName: string;
    senderAddress: string;
    emailSubject: string;
    lastModifiedDate: string;
    label?: typeof labels[keyof typeof labels];
    conversation: {
        name: string;
        content: string;
        timestamp: string;
    }[];
}

interface SalesInsight {
    title: string;
    value: string;
    changePercent: string;
    increase: boolean;
    time: string;
    icon: string;
}

const SaleInsightKey = {
    User: "users",
    Order: "orders",
    Sales: "sales",
    pending: "pending"
} as const

interface SalesInsightIcon {
    key: typeof SaleInsightKey[keyof typeof SaleInsightKey];
    icon: ReactNode;
    background: string;
}

const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

interface SalesChartDataProps {
    month: typeof Months[number],
    sales: { value: number, percentage: number}[]
}

const productDealStates = [
    "Delivered",
    "Pending",
    "Rejected"
]

interface ProductDealProps {
    productName: string;
    imageURL: string;
    location: string;
    dateTime: string;
    piece: number;
    amount: string;
    status: typeof productDealStates[number];
}

type OfferCarouselData = {
    dateRange: string;
    title: string;
    caption: string;
    buttonText: string;
    backgroundColor: string;
    buttonColor: string;
}

type ProductProps = {
    id: number;
    images: string[];
    title: string;
    price: number;
    cur: string;
    rating: number;
    reviews: number;
}

interface InboxTableColumn {
    senderName: string;
    senderAddress: string;
    emailSubject: string;
    lastModifiedDate: string;
    isStarred: boolean;
    label?: string;
    conversation: {
        name: string;
        content: string;
        timestamp: string;
    }[];
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export type { labelColor, inboxListItem, SalesInsight, SalesInsightIcon, SalesChartDataProps, ProductDealProps, OfferCarouselData, ProductProps, InboxTableColumn, DataTableProps };

export { SaleInsightKey, Months, productDealStates, labels };



