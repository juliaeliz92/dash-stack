import { InboxSidebarDrawer } from "../components";

function Inbox() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <InboxSidebarDrawer />
        <h1 className="text-2xl font-bold">Inbox</h1>
      </div>
    </section>
    )
}

export default Inbox;