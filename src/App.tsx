import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import NavBar from "./components/nav-bar"
import SideNavigation from "./components/side-navigation"

export function App() {
  return (
    <SidebarProvider>
      <SideNavigation />
      <SidebarInset>
        <header>
          <NavBar />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}


export default App
