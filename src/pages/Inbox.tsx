import { Card } from "@/components/ui/card";
import { InboxSidebarDrawer, InboxSidebar } from "@/components/inbox";

function Inbox() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <InboxSidebarDrawer />
        <h1 className="text-2xl font-bold">Inbox</h1>
      </div>
      <Card className="px-4 hidden lg:flex">
        <InboxSidebar />
      </Card>
    </section>
    )
}

export default Inbox;