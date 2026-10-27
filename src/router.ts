import { Home } from "./pages/home";
import { Experience } from "./pages/experience";
import { Projects } from "./pages/projects";
import { Neetcode } from "./pages/neetcode";
import { About } from "./pages/aboutme";
import { Contact } from "./pages/contact";

// Dictionary object that maps the key (path) to the value (page)
const routes: Record<string, (container: HTMLElement) => void> = {
    '/': Home,
    '/experience': Experience,
    '/projects': Projects,
    '/neetcode': Neetcode,
    '/about': About,
    '/contact': Contact
}

// Looks up the path in the dictionary, if it doesnt exist, fall back to home or '/'
function render(){
    const container = document.querySelector<HTMLElement>("#center")!
    const renderPage = routes[location.pathname] ?? Home
    renderPage(container);
}

// Pushes the current path and renders it
export function navigate(path: string){
    history.pushState({}, '', path)
    render()
}

// Renders the path
export function initRouter(){
    window.addEventListener('popstate', render)
    render()
}