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
            "Used TypeScript and Vite to create an app that randomly selects TTC Stations and what Restaurants, Cafes and Parks are around them",
            "Fetches nearby places from the Google Places API using each station's coordinates",
            "Hosting the webapp on Google Firebase",
            "Had Claude Code help create the JSON data for the TTC Stations"
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
