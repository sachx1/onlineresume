import Typed from "typed.js";
import { navigate } from "../router";
import { experience } from "../data/resume";
import { techIcons } from "../data/techIcons";

let exp: Typed | undefined

// One technology as a pill: its icon (when there is one) followed by its name
function techChip(name: string): string {
    const icon = techIcons[name];
    const img = icon
        ? `<img class="tech-icon${icon.mono ? " mono" : ""}" src="${icon.src}" alt="" width="18" height="18">`
        : "";
    return `<li class="tech-chip">${img}${name}</li>`;
}

export function Experience (container: HTMLElement) {
    container.innerHTML = `
    <div class="page-header">
        <button type="button" id="home-mode" class="nav-button"><span class="arrow" aria-hidden="true">←</span>Home</button>
        <h1><span id="exp"></span></h1>
    </div>
    <div class="experience-list">
    ${experience.map(job => `
        <article class="experience-card">
          <h2 class="job-title">${job.role} <span class="job-company">· ${job.company}</span></h2>
          <p class="job-meta">${job.start} – ${job.end ?? "Present"} · ${job.location}${job.employment ? ` · ${job.employment}` : ""}</p>
          ${job.description ? `<p class="job-description">${job.description}</p>` : ""}
          <ul class="job-highlights">
            ${job.highlights.map(point => `<li>${point}</li>`).join("")}
          </ul>
          <ul class="tech-list" aria-label="Technologies used">
            ${job.technologies.map(techChip).join("")}
          </ul>
        </article>
      `).join("")}
    </div>`;

    // Check to see if typed needs to destroy and reload
        exp?.destroy();
        // New typed object, creates the speed, loop boolean and list of words to cycle through
        exp = new Typed("#exp", {
            strings: ["Experience"],
            typeSpeed: 60,
            loop: false,
          });

    // HTML Button Elements hooked up to event listener to go back to the home page
    container.querySelector<HTMLButtonElement>('#home-mode')!.addEventListener('click', () => {
        navigate('/')
      })
}