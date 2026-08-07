import { Outlet } from "react-router";
import { Card } from "@/components/ui/card";
import { InboxSidebarDrawer, InboxSidebar } from "@/components/inbox";

function Inbox() {

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
        <Outlet />
      </div>
    </section>
  )
}


export default Inbox;