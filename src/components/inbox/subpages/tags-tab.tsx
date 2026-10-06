import { useParams } from "react-router";
import { useInboxListByTagApi } from "@/services";
import InboxContainer from "./inbox-container"

function TagsTab() {
    const { label } = useParams();
    const { data, isLoading, error } = useInboxListByTagApi(label, 0, 14);

    return (
        <InboxContainer inboxListData={data} isInboxListLoading={isLoading} inboxListError={error} />
    );
}

export default TagsTab;