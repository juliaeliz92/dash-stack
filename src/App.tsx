import { Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { NavBar, SideNavigation } from "@/components"
import { navigation } from "@/constants.tsx";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}


export default App
