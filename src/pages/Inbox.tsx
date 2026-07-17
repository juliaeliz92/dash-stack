import { Card } from "@/components/ui/card";
import { InboxSidebarDrawer, InboxSidebar, inboxTableColumns, DataTable } from "@/components/inbox";
import { useInboxListApi } from "@/services";
import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Download, Info, Trash } from "lucide-react";

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
      <div className="flex flex-col lg:flex-row gap-4">
        <Card className="px-4 hidden lg:block">
          <InboxSidebar />
        </Card>
        <Card className="flex-1 p-0">
          <div className="overflow-hidden rounded-md border">
            <div className="flex items-center justify-between p-4 gap-4">
              <SearchInput placeholder="Search mail"/>
              <ButtonGroup>
                <Button variant="outline" size="icon">
                  <Download size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <Info size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash size={16} />
                </Button>
              </ButtonGroup>
            </div>
            <DataTable columns={inboxTableColumns} data={inboxListData || []} />
          </div>
        </Card>
      </div>
    </section>
  )
}


export default Inbox;