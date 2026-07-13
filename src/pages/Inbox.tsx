import { Card } from "@/components/ui/card";
import { InboxSidebarDrawer, InboxSidebar, inboxTableColumns, DataTable } from "@/components/inbox";
import { useInboxListApi } from "@/services";

function Inbox() {
  const { data: inboxListData, isLoading: isInboxListLoading, error: inboxListError } = useInboxListApi();

  if (isInboxListLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Loading...</p>
      </div>
    );
  }

  if(inboxListError) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>Error loading inbox data.</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <InboxSidebarDrawer />
        <h1 className="text-2xl font-bold">Inbox</h1>
      </div>
      <Card className="px-4 hidden lg:flex">
        <InboxSidebar />
        <DataTable columns={inboxTableColumns} data={inboxListData || []} />
      </Card>
    </section>
    )
}

export default Inbox;