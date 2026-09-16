import { useInboxListApi } from "@/services";
import InboxContainer from "./inbox-container"

function InboxTab() {

    const { data: inboxListData, isLoading: isInboxListLoading, error: inboxListError } = useInboxListApi(0, 14);
    return(
        <InboxContainer inboxListData={inboxListData} isInboxListLoading={isInboxListLoading} inboxListError={inboxListError} />
    )
}

export default InboxTab