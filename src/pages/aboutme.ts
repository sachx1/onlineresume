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
            <p class="about-text">My journey was a long one. As mentioned above, I started in the year of 2013 in Grade 10. From there, I learned the basics of Java, such as Object Oriented Programming,
            Loops, Arrays, JDK, JRE and JVM. I created my first hello world program with Java. From there, we built a lot of applications that displayed in the console. Nothing with a UI
            as of yet. In Grade 11, we started to dabble with GUIs in Java. I remember creating a soccer database with the current players from Europe's top 5 leagues. This was especially hard
            at the time, since I had no idea about APIs. Which in retrospect would have saved me a ton of time, rather than inputting each player one by one. Grade 12 was when we moved onto Python.
            We learned the basics, and had to develop many different projects. Some using Raspberry Pis. The final project was building a game in Python. By this time, I was heavily into gaming.
            While I loved Computer Science, I felt that gaming would help me achieve my goal. I would've loved to make a game that was used worldwide, and one which would create countless memories
            for people my age and above.</p>
            <p class="about-text">I ended up going to York University for their Digital Media program. This was a program that combined York's Computer Science program and their Arts program to teach students the skills required
            to build Video Games. Many courses overlapped with York's Computer Science program, such as Discrete Math, Data Structures and Algorithms, Introduction to Object Oriented Programming etc. We also took
            courses that taught us how to 3D Model and Animate, and how to build games using Unity and Unreal Engine. For my capstone project, my friends and I created a VR escape room. This project combined all of the skills
            learned over my 5 years of being at York. I used the techniques learned in my various courses, to bring this idea to life.</p>
            <p class="about-text">While I was at York University, I ended up getting a part time job at Toronto General Hospital. This helped me a lot, not only with my knowledge of development, but also gave
            me the confidence to tackle hard projects on my own, whether it's a personal project or at School. I got this job in 2019 and kept it until April 2020, at the start of the pandemic. It was a sad end, since
            I loved working with the Anesthesia team, however, we lost our funding to help combat Covid-19. During this time, I just focused on finishing my degree and building small projects on the side to keep my brain working
            in lockdown. In April of 2021, I graduated from the program with honours. I felt so relieved and happy that after a long journey, I finally got the degree.</p>
            <p class="about-text">After graduating and celebrating, I started to apply to jobs. While my experience at Toronto General certainly helped, the market was hyper competitive, which made me have to rethink my entire
            resume and way of applying. In Spring of 2022, I finally got a job at a start up. The company was Chelsea Avondale. I was excited to start working with them, as it was my first full time gig as a developer. However, I quickly found
            that start up culture was definitely not for me at that point in my career. So after sticking it out for as long as I could, I ended up leaving and had to look for a job for the next few months. Luckily I had a lot of savings
            to get me by until February of 2023, when I got the job at Toromont Caterpillar and from then on, have been working at Toromont. Working here gave me the time and space to learn, work on my craft, and build something meaningful.</p>
            <p class="about-text">During my time here at Toromont Caterpillar, I built a Twilio Notification System, which sends over 10k SMS and Email Notifications to Customers which use equipment and machines from Toromont. I also helped
            migrate our on prem data to Microsoft Fabric. Within Fabric, I also helped build pipelines, created stored procedures and automate certain functions with Python Notebooks.</p>
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
