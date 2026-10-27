import Typed from "typed.js";
import { navigate } from "../router";
import { webProjects } from "../data/projects";
import { techChip } from "../techChip";
import githubIcon from "devicon/icons/github/github-original.svg";

let proj: Typed | undefined;

export function Projects (container: HTMLElement) {
    container.innerHTML = `
        <div class="page-header">
            <button type="button" id="home-mode" class="nav-button"><span class="arrow" aria-hidden="true">←</span>Home</button>
            <h1><span id="proj"></span></h1>
        </div>
        <div class="experience-list">
        ${webProjects.map(project =>
            `<article class="experience-card">
                <h2 class="job-title">${project.assignment}</h2>
                <!-- Links open in a new tab; rel="noopener noreferrer" stops the new page from controlling this one -->
                <div class="project-links">
                    <a class="link-button" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="${project.assignment} live site">
                        Live site <span aria-hidden="true">↗</span>
                    </a>
                    <a class="link-button" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="${project.assignment} on GitHub">
                        <img class="tech-icon mono" src="${githubIcon}" alt="" width="18" height="18">GitHub
                    </a>
                </div>
                <p class="job-description">${project.summary}</p>
                <ul class="job-highlights">
                    ${project.highlights.map(point => `<li>${point}</li>`).join("")}
                </ul>
                <ul class="tech-list" aria-label="Technologies used">
                    ${project.technologies.map(techChip).join("")}
                </ul>
            </article>`
        ).join("")}
        </div>
    `

    proj?.destroy();

    proj = new Typed("#proj", {
            strings: ["Projects"],
            typeSpeed: 60,
            loop: false,
        });

    // HTML Button Elements hooked up to event listener to go back to the home page
    container.querySelector<HTMLButtonElement>('#home-mode')!.addEventListener('click', () => {
        navigate('/')
      })
}