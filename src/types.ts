import type { ReactNode } from "react";

type labelColor = {
    value: string;
    borderColor: string;
    checkedBackgroundColor: string;
    checkedBorderColor: string;
}

type inboxListItem = {
    senderName: string;
    senderAddress: string;
    emailSubject: string;
    lastModifiedDate: string;
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

export type { labelColor, inboxListItem, SalesInsight, SalesInsightIcon, SalesChartDataProps, ProductDealProps };

export { SaleInsightKey, Months, productDealStates };



