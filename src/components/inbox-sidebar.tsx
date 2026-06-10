import {Button} from "@/components/ui/button";

import { InboxSidebarMenu, InboxSidebarLabels } from "@/components";

function InboxSidebar() {
    return (
        <aside className="p-4 flex flex-col gap-8 overflow-y-auto h-full">
            <Button variant="default" className="w-full">
                +Compose
            </Button>
            <InboxSidebarMenu />
            <InboxSidebarLabels />
        </aside>
    );
}

export default InboxSidebar;
