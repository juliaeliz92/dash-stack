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

export type { labelColor, inboxListItem, SalesInsight, SalesInsightIcon };

export { SaleInsightKey }



