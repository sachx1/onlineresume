import Typed from "typed.js";
import { navigate } from "../router";
import { skills, education } from "../data/resume";
import { techChip } from "../techChip";

let about: Typed | undefined;

export function About (container: HTMLElement) {
    container.innerHTML = `
    <div class="page-header">
        <button type="button" id="home-mode" class="nav-button"><span class="arrow" aria-hidden="true">←</span>Home</button>
        <h1><span id="aboutme"></span></h1>
    </div>

    <!-- Intro: no card, so it reads like the start of a conversation -->
    <section class="about-intro">
        <p>Ever since I got my hands on my first PC, I have been fascinated with how applications work. Not just how they work, but how they're made,
            and building my own applications. Once I entered Grade 10, I jumped right into the Computer Science courses that my school offered. I remember learning
            Java as my first language. Despite my struggle learning Java, I knew this is what I wanted to do with my career. I just loved solving
            problems in the digital world. Since then, I didn't just want to build applications, I wanted to build applications that had real world use.
            Fast forward to 2026, I'm a developer that has built many applications with real world use. From 3D heart viewers created for educational use,
            to notification systems that save service reps tons of time. It has been a pleasure to use my passion to develop applications and systems which people and
            companies use.
        </p>
    </section>

    <div class="experience-list">
        <article class="experience-card">
            <h2 class="job-title">How I got here</h2>
            <p class="about-text">It started in Grade 10, back in 2013, with Java: object-oriented programming, loops, arrays, and my very first hello world.
            In Grade 11 we moved on to GUIs, and I built a soccer database of the players in Europe's top 5 leagues. I had no idea APIs existed, so I entered every
            player one by one. Grade 12 brought Python, Raspberry Pis, and a final project building a game. By then I was heavily into gaming, and I wanted to make a
            game that would create countless memories for people around the world.</p>
            <p class="about-text">That led me to York University's Digital Media program, which combined Computer Science courses like Data Structures and Algorithms
            and Discrete Math with 3D modelling, animation, and game development in Unity and Unreal Engine. For our capstone, my friends and I built a VR escape room.
            In 2019, while still at York, I joined Toronto General Hospital part-time in the Department of Anesthesia, building 3D heart viewers for medical students
            with feedback from the hospital's cardiac team. It gave me the confidence to tackle hard projects on my own. I stayed until April 2022, graduating from
            York with honours along the way in 2021.</p>
            <p class="about-text">Breaking into the industry wasn't easy. The market was hyper competitive, and I had to rethink my resume and how I applied. In spring
            2022 I landed my first full-time developer role at Chelsea Avondale, a startup, and learned that startup culture wasn't the right fit for me at that point in
            my career. In February 2023 I joined Toromont Cat, where I've had the time and space to grow my craft and build systems the business relies on every day.</p>
        </article>

        <!-- Draft: edit to match what you're actually focused on -->
        <article class="experience-card">
            <h2 class="job-title">What I'm focused on now</h2>
            <p class="about-text">Right now I'm sharpening my TypeScript and modern front-end tooling. This site is built with TypeScript and Vite, with no framework,
            so I understand what's happening under the hood. At work, I'm going deeper into data engineering with Microsoft Fabric. I'm also exploring how AI tools
            like Claude Code can speed up development, while still understanding and owning every line that ships.</p>
        </article>

        <article class="experience-card">
            <h2 class="job-title">Skills</h2>
            ${skills.map(group => `
                <div class="skill-group">
                    <h3>${group.category}</h3>
                    <ul class="tech-list" aria-label="${group.category}">
                        ${group.items.map(techChip).join("")}
                    </ul>
                </div>
            `).join("")}
        </article>

        <!-- Two short cards side by side on wider screens, stacked on phones -->
        <div class="card-row">
            <article class="experience-card">
                <h2 class="job-title">Education</h2>
                ${education.map(school => `
                    <p class="about-text"><strong>${school.degree}, ${school.field}</strong></p>
                    <p class="job-meta">${school.school} · ${school.location} · ${school.year}</p>
                `).join("")}
            </article>

            <!-- Draft: based on your story; swap in your own hobbies -->
            <article class="experience-card">
                <h2 class="job-title">Outside of work</h2>
                <p class="about-text">When I'm not coding, you'll usually find me gaming, the hobby that first pulled me toward game design, or following soccer
                across Europe's top leagues. I also love exploring Toronto, which is what inspired TTC Roulette.</p>
            </article>
        </div>
    </div>

    <!-- Closing call to action, pointing visitors to the Contact page -->
    <div class="about-cta">
        <p>Want to chat?</p>
        <button type="button" id="contact-mode" class="nav-button">Get in touch<span class="arrow forward" aria-hidden="true">→</span></button>
    </div>
    `

    about?.destroy();
    about = new Typed("#aboutme", {
        strings: ["About"],
        typeSpeed: 60,
        loop: false,
    });

    // HTML Button Elements hooked up to event listener to go back to the home page
    container.querySelector<HTMLButtonElement>('#home-mode')!.addEventListener('click', () => {
        navigate('/')
    })

    container.querySelector<HTMLButtonElement>('#contact-mode')!.addEventListener('click', () => {
        navigate('/contact')
    })
}
