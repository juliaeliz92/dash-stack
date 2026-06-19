import { InboxSidebarMenu, InboxSidebarLabels, ComposeEmailDialog } from "@/components";

function InboxSidebar() {
    return (
        <aside className="p-4 flex flex-col gap-8 overflow-y-auto h-full">
            <ComposeEmailDialog />
            <InboxSidebarMenu />
            <InboxSidebarLabels />
        </aside>
    );
}

export default InboxSidebar;
