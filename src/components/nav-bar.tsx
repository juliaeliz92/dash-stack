import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu, Bell, Settings, CalendarDays, UserRound, CircleAlert, Check, UserRoundPen, KeyRound, RefreshCcw, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";

const notificationsSettings = [
    {
        title: "Settings",
        description: "Update Dashboard",
        icon: <Settings color="white"/>,
        backgroundColor: "bg-blue-400"
    },
    {
        title: "Event Upgrade",
        description: "An event date update",
        icon: <CalendarDays color="white" />,
        backgroundColor: "bg-pink-400"
    },
    {
        title: "Profile",
        description: "Update your profile",
        icon: <UserRound color="white" />,
        backgroundColor: "bg-purple-400"
    },
    {
        title: "Application Error",
        description: "Check your running applications",
        icon: <CircleAlert color="white" />,
        backgroundColor: "bg-red-400"
    }
]

const accountSettings = [
    {
        title: "Manage Account",
        icon: <UserRoundPen color="blue" />,
    }, 
    {
        title: "Change Password",
        icon: <KeyRound color="pink" />,
    },
    {
        title: "Activity Log",
        icon: <RefreshCcw color="purple" />,
    },
    {
        title: "Log Out",
        icon: <LogOut color="red" />,
    }
]

const FLAG_API = "https://flagcdn.com/"

const languages = [
    {
        name: "English",    
        flag: "gb",
    },
    {
        name: "Spanish",
        flag: "es",
    },
    {
        name: "French",
        flag: "fr",
    }
]



const SettingsBar = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    return (
        <div className="p-2 flex w-full items-center justify-between gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="relative">
                        <Badge className="absolute -top-2 left-4">
                            3
                        </Badge>
                        <Bell size={30} color="blue" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel><h1 className="font-bold text-black text-lg">Notifications</h1></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {notificationsSettings.map((setting, index) => (
                            <DropdownMenuItem key={index} className="py-3">
                                <div className="flex items-center gap-4">   
                                    <div className={`p-2 rounded-full ${setting.backgroundColor}`}>
                                        {setting.icon}
                                    </div>  
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold">{setting.title}</span>
                                    <span className="text-sm text-muted-foreground">{setting.description}</span>
                                </div>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-3 flex justify-center">
                        <a href="#">See All Notifications</a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <img src={`${FLAG_API}w80/${selectedLanguage.flag}.png`} alt={selectedLanguage.name} className="rounded-sm w-15 h-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel><h1 className="font-bold text-black text-lg">Select Language</h1></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {languages.map((language, index) => (
                            <DropdownMenuItem key={index} className="p-2 flex" onSelect={() => setSelectedLanguage(language)}>
                                <img src={`${FLAG_API}w40/${language.flag}.png`} alt={language.name} className="rounded-sm" />
                                <span className="pl-2">{language.name}</span>
                                {selectedLanguage.name === language.name && <Check size={30} color="blue" className="ml-0"/>}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    <DropdownMenuItem className="flex flex-col items-start p-2">
                        <span className="font-bold">Jane Doe</span>
                        <span className="text-sm text-muted-foreground">Admin</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {accountSettings.map((setting, index) => (
                        <>
                            <DropdownMenuItem key={index} className="p-2 flex items-center gap-4">
                                <div className="p-2 rounded-full">
                                    {setting.icon}
                                </div>
                                <span className="font-bold">{setting.title}</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="last:hidden"/>
                        </>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export function NavBar() {
  return (
   <NavigationMenu className="min-w-full p-4 flex items-center justify-between">
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink asChild href="/" className="text-3xl">
                    <h1 className="font-bold">
                        <span className="text-primary">Dash</span><span className="dark:text-white">Stack</span>
                    </h1>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
            <div className="md:hidden">
                <Drawer
                    direction="right"
                >
                    <DrawerTrigger asChild>
                        <NavigationMenuItem>
                            <Menu size={30} />
                        </NavigationMenuItem>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <SettingsBar />
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </NavigationMenuList>
   </NavigationMenu>
  )
}

export default NavBar