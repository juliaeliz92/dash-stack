import { Routes, Route } from "react-router";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { NavBar, SideNavigation } from "@/components"
import { navigation } from "@/constants.tsx";

export function App() {
  return (
    <SidebarProvider>
      <SideNavigation />
      <SidebarInset>
        <header>
          <NavBar />
        </header>
        <main className="py-8 px-6 h-full bg-gray-100 dark:bg-gray-900 overflow-auto">
          <Routes>
            {navigation.map((nav) => nav.group.items.map((item) => (
              <Route key={item.link} path={item.link} element={item.page} />)
            ))}
          </Routes>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}


export default App
