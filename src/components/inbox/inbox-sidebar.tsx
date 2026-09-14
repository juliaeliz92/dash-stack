import { InboxSidebarMenu, InboxSidebarLabels, ComposeEmailDialog } from "@/components/inbox";

function InboxSidebar() {
    return (
        <aside className="p-4 flex flex-col gap-6">
            <ComposeEmailDialog />
            <InboxSidebarMenu />
            <InboxSidebarLabels />
        </aside>
    );
}

export default InboxSidebar;
