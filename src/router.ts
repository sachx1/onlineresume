import { Home } from "./pages/home";
import { Experience } from "./pages/experience";
import { Projects } from "./pages/projects";
import { Neetcode } from "./pages/neetcode";
import { About } from "./pages/aboutme";
import { Contact } from "./pages/contact";

const routes: Record<string, (container: HTMLElement) => void> = {
    '/': Home,
    '/experience': Experience,
    '/projects': Projects,
    '/neetcode': Neetcode,
    '/about': About,
    '/contact': Contact
}

function render(){
    const container = document.querySelector<HTMLElement>("#center")!
    const renderPage = routes[location.pathname] ?? Home
    renderPage(container);
}

export function navigate(path: string){
    history.pushState({}, '', path)
    render()
}

export function initRouter(){
    window.addEventListener('popstate', render)
    render()
}