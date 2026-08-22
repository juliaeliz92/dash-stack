import { Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { NavBar, SideNavigation } from "@/components"
import { navigation } from "@/constants.tsx";
import { Toaster } from "@/components/ui/sonner"

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SidebarProvider>
          <SideNavigation />
          <SidebarInset>
            <header>
              <NavBar />
            </header>
            <main className="py-8 px-6 h-full bg-gray-100 dark:bg-gray-900 overflow-auto">
              <Routes>
                {navigation.map((nav) => nav.group.items.map((item) => {
                  const childRoutes: React.ReactNode[] = [];
                  if(item.children) {
                    item.children.map((child) => {
                      childRoutes.push(
                        <Route key={child.link} path={child.link} element={child.page} />
                      )
                    })
                  }
                  return (
                    <Route key={item.link} path={item.link} element={item.page}>
                      {childRoutes}
                    </Route>
                  )
                }))}
              </Routes>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}


export default App
