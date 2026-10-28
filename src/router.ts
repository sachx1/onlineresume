import { Home } from "./pages/home";
import { Experience } from "./pages/experience";
import { Projects } from "./pages/projects";
import { Neetcode } from "./pages/neetcode";
import { About } from "./pages/aboutme";
import { Contact } from "./pages/contact";

// Each route has the function that renders the page and the title for the browser tab
interface Route {
    render: (container: HTMLElement) => void;
    title: string;
}

// Dictionary object that maps the key (path) to the value (page and its title)
const routes: Record<string, Route> = {
    '/': { render: Home, title: "Sachin Khargie · Backend Developer & Data Engineer" },
    '/experience': { render: Experience, title: "Experience · Sachin Khargie" },
    '/projects': { render: Projects, title: "Projects · Sachin Khargie" },
    '/neetcode': { render: Neetcode, title: "NeetCode · Sachin Khargie" },
    '/about': { render: About, title: "About · Sachin Khargie" },
    '/contact': { render: Contact, title: "Contact · Sachin Khargie" }
}

// Looks up the path in the dictionary, if it doesnt exist, fall back to home or '/'
function render(){
    const container = document.querySelector<HTMLElement>("#center")!
    const route = routes[location.pathname] ?? routes['/']!
    document.title = route.title
    route.render(container);
}

// Pushes the current path, scrolls back to the top, and renders it
export function navigate(path: string){
    history.pushState({}, '', path)
    window.scrollTo(0, 0)
    render()
}

// Renders the path
export function initRouter(){
    window.addEventListener('popstate', render)
    render()
}
