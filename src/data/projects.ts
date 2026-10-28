export interface webProjects {
    assignment: string,
    summary: string,
    link: string,
    github: string,
    image?: string,     // screenshot in public/images/projects, shown at the top of the card
    imageAlt?: string,  // describes the screenshot for screen readers
    highlights: string[],
    technologies: string[]
}

export const webProjects: webProjects[] = [
    {
        assignment: "TTC Roulette",
        summary: "A little web app for exploring Toronto by subway: spin for a random TTC (Toronto Transit Commission) station or search for a specific one, and get nearby restaurants, parks, and cafes to check out — using the Google Places API.",
        link: "https://ttcroulette-50eba.web.app",
        github: "https://github.com/sachx1/ttc_roulette",
        image: "/images/projects/ttc-roulette.jpg",
        imageAlt: "TTC Roulette showing Islington station with nearby restaurant cards and their ratings",
        highlights: [
            "Built a framework-free single-page app in TypeScript and Vite, with a hand-written History API router for Roulette and Search modes",
            "Pulls nearby restaurants, cafés and parks from the Google Places API using each station’s coordinates, caching results per station so switching categories doesn’t trigger another API call",
            "Generated the station dataset (names, coordinates, line colours) with Claude Code, then checked it against TTC’s published station data",
            "Restricted the client-side Places API key by referrer and API, since Vite bundles it into the browser code"
        ],
        technologies: ["TypeScript", "Vite", "Google Places API", "Google Firebase"]
    },
    {
        assignment: "Online Resume",
        summary: "Wanted to create a refreshed web online resume that goes more in depth on my career, projects and who I am",
        link: "https://onlineresume-e0975.web.app/",
        github: "https://github.com/sachx1/onlineresume",
        image: "/images/projects/online-resume.jpg",
        imageAlt: "Home page of this site, with the typing headline and navigation buttons over the particle background",
        highlights: [
            "Created the webapp with TypeScript and Vite, with a hand-written client-side router instead of a framework",
            "Live background was created using the library tsParticles",
            "Deploys automatically to Firebase Hosting through a GitHub Actions pipeline on every push",
            "Used Claude Code to help with styling and animations"
        ],
        technologies: ["TypeScript", "Vite", "Google Firebase", "GitHub Actions"]
    }
]
