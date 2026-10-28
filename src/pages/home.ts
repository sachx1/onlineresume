import Typed from "typed.js";
import { navigate } from "../router";
import { RESUME_PDF, revealResumeLinks } from "../resumePdf";

// Checks to see if there is a word, if no then leave undefined
let typed: Typed | undefined;

// Function which creates the home page
export function Home (container: HTMLElement) {
    container.innerHTML = `
    <div>
        <h1>Hi, I'm Sachin. I'm a <span id="role"></span></h1>
        <!-- One-line summary, so a recruiter skimming the first screen gets the key facts -->
        <p class="home-summary">Full-stack developer with 3+ years building Node.js services, JavaScript front ends, and data pipelines. Currently a Backend Developer at Toromont Cat in the Greater Toronto Area.</p>
        <h2>Welcome to my Online Portfolio. This was made to display my work, projects, and a bit about me in more detail than a standard resume could provide.</h2>
        <!-- Hidden until the PDF exists (see resumePdf.ts) -->
        <div class="project-links" data-resume hidden>
            <a class="link-button" href="${RESUME_PDF}" download>Download resume (PDF) <span aria-hidden="true">↓</span></a>
        </div>
    </div>

    <!-- Neetcode button is hidden until that page is finished; the /neetcode route still works -->
    <div class="home-buttons">
        <button type="button" id="experience-mode">Experience</button>
        <button type="button" id="projects-mode">Projects</button>
        <button type="button" id="about-mode">About</button>
        <button type="button" id="contact-mode">Contact</button>
    </div>`

    revealResumeLinks(container);

    // Check to see if typed needs to destroy and reload
    typed?.destroy();
    // New typed object, creates the speed, loop boolean and list of words to cycle through
    typed = new Typed("#role", {
        strings: ["Platform Engineer.", "Full Stack Engineer.", "problem solver."],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
      });

      // HTML Button Elements hooked up to event listener to give the buttons functionality, so they can switch to a diff page
      container.querySelector<HTMLButtonElement>('#experience-mode')!.addEventListener('click', () => {
        navigate('/experience')
      })
    
      container.querySelector<HTMLButtonElement>('#projects-mode')!.addEventListener('click', () => {
        navigate('/projects')
      })

      container.querySelector<HTMLButtonElement>('#about-mode')!.addEventListener('click', () => {
        navigate('/about')
      })

      container.querySelector<HTMLButtonElement>('#contact-mode')!.addEventListener('click', () => {
        navigate('/contact')
      })
}