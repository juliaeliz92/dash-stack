import { useInboxListTrashEmailsApi } from "@/services";
import InboxContainer from "./inbox-container"

function TrashTab() {
    const { data, isLoading, error } = useInboxListTrashEmailsApi(0, 14);

    return (
        <InboxContainer inboxListData={data} isInboxListLoading={isLoading} inboxListError={error} />
    );
}

export default TrashTab;