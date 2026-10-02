import { useInboxListSpamEmailsApi } from "@/services";
import InboxContainer from "./inbox-container"

function SpamTab() {
    const { data, isLoading, error } = useInboxListSpamEmailsApi(0, 14);

    return (
        <InboxContainer inboxListData={data} isInboxListLoading={isLoading} inboxListError={error} />
    );
}

export default SpamTab;