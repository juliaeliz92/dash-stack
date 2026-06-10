import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { InboxSidebar } from "@/components"

function InboxSidebarDrawer() {
    return (
        <div className="flex items-center gap-4 lg:hidden">
            <Drawer direction="left">
                <DrawerTrigger asChild>
                    <Button variant="outline" className="hover:bg-grey-100">
                        <Menu className="w-6 h-6" />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="p-4 h-full overscroll-auto">
                    <DrawerHeader>
                        <DrawerTitle className="sr-only">Inbox Sidebar</DrawerTitle>
                        <DrawerDescription className="sr-only">
                            Open the inbox sidebar to view your conversations and messages.
                        </DrawerDescription>
                    </DrawerHeader>
                    <InboxSidebar />
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
  )
}
export default InboxSidebarDrawer;