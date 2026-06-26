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

export type { labelColor, inboxListItem };