import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Menu } from "lucide-react";
import SearchInput from "./search-input";
import NavbarMenu from "./navbar-menu";
import Title from "./title";

export function NavBar() {
  return (
   <NavigationMenu className="min-w-full p-4 flex items-center justify-between">
        <div className="md:hidden">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <SidebarTrigger className="p-2">
                        <Menu size={25} />
                    </SidebarTrigger>
                </NavigationMenuItem>
            </NavigationMenuList>
        </div>
        <NavigationMenuList className="md:hidden">
            <NavigationMenuItem>
                <NavigationMenuLink asChild href="/">
                    <Title />
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        <div className="hidden md:flex md:items-center">
            <NavigationMenuList>
                <SearchInput />
            </NavigationMenuList>
        </div>
        <div className="hidden md:flex md:items-center">
            <NavigationMenuList>
                <NavbarMenu />
            </NavigationMenuList>
        </div>
   </NavigationMenu>
  )
}

export default NavBar