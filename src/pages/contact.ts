import Typed from "typed.js";
import { navigate } from "../router";
import { profile } from "../data/resume";
import { RESUME_PDF, revealResumeLinks } from "../resumePdf";
import mailIcon from "../assets/icons/mail.svg";
import linkedinIcon from "devicon/icons/linkedin/linkedin-original.svg";
import githubIcon from "devicon/icons/github/github-original.svg";

let contact: Typed | undefined;
let copyReset: number | undefined;

// Shows a URL without the "https://www." part, e.g. github.com/sachx1
function shortUrl(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, "");
}

export function Contact (container: HTMLElement) {
    container.innerHTML = `
    <div class="page-header">
        <button type="button" id="home-mode" class="nav-button"><span class="arrow" aria-hidden="true">←</span>Home</button>
        <h1><span id="contact"></span></h1>
    </div>

    <section class="about-intro">
        <p>I'm open to new backend, data engineering, and full-stack developer roles. Whether you're hiring, want to collaborate on something,
        or just want to talk shop, I'd love to hear from you. Email is the best way to reach me.</p>
    </section>

    <div class="experience-list">
        <article class="experience-card">
            <h2 class="job-title">Get in touch</h2>
            <p class="job-meta">Based in ${profile.location}</p>
            <ul class="contact-list">
                <li class="contact-row">
                    <a class="contact-link" href="mailto:${profile.email}">
                        <img class="contact-icon mono" src="${mailIcon}" alt="" width="28" height="28">
                        <span class="contact-text">
                            <span class="contact-label">Email</span>
                            <span class="contact-value">${profile.email}</span>
                        </span>
                    </a>
                    <!-- Copies the address, for people whose browser has no email app set up -->
                    <button type="button" id="copy-email" class="link-button">Copy</button>
                </li>
                <li class="contact-row">
                    <a class="contact-link" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
                        <img class="contact-icon" src="${linkedinIcon}" alt="" width="28" height="28">
                        <span class="contact-text">
                            <span class="contact-label">LinkedIn</span>
                            <span class="contact-value">${shortUrl(profile.linkedin)}</span>
                        </span>
                        <span class="contact-arrow" aria-hidden="true">↗</span>
                    </a>
                </li>
                <li class="contact-row">
                    <a class="contact-link" href="${profile.github}" target="_blank" rel="noopener noreferrer">
                        <img class="contact-icon mono" src="${githubIcon}" alt="" width="28" height="28">
                        <span class="contact-text">
                            <span class="contact-label">GitHub</span>
                            <span class="contact-value">${shortUrl(profile.github)}</span>
                        </span>
                        <span class="contact-arrow" aria-hidden="true">↗</span>
                    </a>
                </li>
                <!-- Hidden until the PDF exists (see resumePdf.ts) -->
                <li class="contact-row" data-resume hidden>
                    <a class="contact-link" href="${RESUME_PDF}" download>
                        <span class="contact-icon contact-glyph" aria-hidden="true">↓</span>
                        <span class="contact-text">
                            <span class="contact-label">Resume</span>
                            <span class="contact-value">Download PDF</span>
                        </span>
                    </a>
                </li>
            </ul>
        </article>
    </div>
    `

    revealResumeLinks(container);

    contact?.destroy();
    contact = new Typed("#contact", {
        strings: ["Contact"],
        typeSpeed: 60,
        loop: false,
    });

    // HTML Button Elements hooked up to event listener to go back to the home page
    container.querySelector<HTMLButtonElement>('#home-mode')!.addEventListener('click', () => {
        navigate('/')
    })

    // Copy the email address, then show "Copied!" on the button for 2 seconds
    const copyButton = container.querySelector<HTMLButtonElement>('#copy-email')!;
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            copyButton.textContent = "Copied!";
        } catch {
            copyButton.textContent = "Couldn't copy";
        }
        clearTimeout(copyReset);
        copyReset = window.setTimeout(() => { copyButton.textContent = "Copy"; }, 2000);
    })
}
