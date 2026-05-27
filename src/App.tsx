import { Routes, Route } from "react-router";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { NavBar, SideNavigation } from "@/components"
import { Dashboard, Products } from "@/pages";

export function App() {
  return (
    <SidebarProvider>
      <SideNavigation />
      <SidebarInset>
        <header>
          <NavBar />
        </header>
        <main className="py-8 px-6 h-full bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}


export default App
