import { useInboxListStarredEmailsApi } from "@/services";
import InboxContainer from "./inbox-container"

function StarredTab() {
    const { data, isLoading, error } = useInboxListStarredEmailsApi(0, 14);

    return (
        <InboxContainer inboxListData={data} isInboxListLoading={isLoading} inboxListError={error} />
    );
}

export default StarredTab;