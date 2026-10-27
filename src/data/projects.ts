export interface webProjects {
    assignment: string,
    summary: string,
    link: string,
    github: string,
    highlights: string[],
    technologies: string[]
}

export const webProjects: webProjects[] = [
    {
        assignment: "TTC Roulette",
        summary: "A little web app for exploring Toronto by subway: spin for a random TTC (Toronto Transit Commission) station or search for a specific one, and get nearby restaurants, parks, and cafes to check out — using the Google Places API.",
        link: "https://ttcroulette-50eba.web.app",
        github: "https://github.com/sachx1/ttc_roulette",
        highlights: [
            "Used TypeScript and Vite to create an app that randomly selects TTC Stations and what Restaurants, Cafes and Parks are around them",
            "Fetches data via Google Maps API and Coordinates",
            "Hosting the webapp on Google Firebase",
            "Had Claude Code help create the JSON data for the TTC Stations"
        ],
        technologies: ["Node.js", "Google Maps API", "Google Firebase", "TypeScript", "Vite"]
    }, 
    {
        assignment: "Online Resume",
        summary: "Wanted to create a refreshed web online resume that goes more in depth on my career, projects and who I am",
        link: "https://onlineresume-e0975.web.app/",
        github: "https://github.com/sachx1/onlineresume",
        highlights: [
            "Created the webapp with TypeScript and Vite",
            "Live background was created using the library tsParticles",
            "Used Claude Code to help with styling and animations"
        ],
        technologies: ["Node.js", "Google Firebase", "TypeScript", "Vite"]
    }
]