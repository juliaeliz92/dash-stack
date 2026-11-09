import { Card } from "@/components/ui/card";
import { inboxTableColumns, DataTable } from "@/components/inbox";
// import { Button } from "@/components/ui/button"
import type { InboxTableColumn } from "@/types";

function InboxContainer({ inboxListData, isInboxListLoading, inboxListError }: { inboxListData?: {inboxList: InboxTableColumn[], totalCount: number}, isInboxListLoading?: boolean, inboxListError?: Error | null}) {

    // const handleRowSelection = (newSelection: Record<string, boolean>) => {
    //     setRowSelection(newSelection)
    // }
    
    if (inboxListError) {
        return (
            <div className="flex items-center justify-center h-96">
                <p>Error loading inbox data.</p>
            </div>
        );
    }
    return (<>
        { isInboxListLoading && (
            <div className="flex items-center justify-center h-96 w-full">
                <p>Loading emails...</p>
            </div>
        )}
        {
            !isInboxListLoading && inboxListData && inboxListData.inboxList.length === 0 && (
                <div className="flex items-center justify-center h-96">
                    <p>No emails found.</p>
                </div>
            )
        }
        {
            !isInboxListLoading && inboxListData && inboxListData.inboxList.length > 0 && (
                <div className="flex-1 flex flex-col gap-4">
                    <Card className="flex p-0">
                        <div className="overflow-hidden rounded-md border">
                            <DataTable columns={inboxTableColumns} data={inboxListData?.inboxList || []} />
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
}

export default InboxContainer;