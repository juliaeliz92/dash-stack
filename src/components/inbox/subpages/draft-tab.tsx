import { useInboxListDraftEmailsApi } from "@/services";
import InboxContainer from "./inbox-container"

function DraftTab() {
    const { data, isLoading, error } = useInboxListDraftEmailsApi(0, 14);

    return (
        <InboxContainer inboxListData={data} isInboxListLoading={isLoading} inboxListError={error} />
    );
}

export default DraftTab;