import { useInboxListSentEmailsApi } from "@/services";
import InboxContainer from "./inbox-container"

function SentTab() {
    const { data, isLoading, error } = useInboxListSentEmailsApi(0, 14);

    return (
        <InboxContainer inboxListData={data} isInboxListLoading={isLoading} inboxListError={error} />
    );
}

export default SentTab;