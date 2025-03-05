import './App.css'
import Sidebar from './layout/Sidebar/sidebar'
import Content from './layout/content/Content'
import { SidebarProvider } from "./context/sidebarContext";

function App() {
    return (
        <SidebarProvider>
            <div className="app">
                <Sidebar />
                <Content />
            </div>
        </SidebarProvider>
    )
}

export default App;
