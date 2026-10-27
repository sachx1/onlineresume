import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <main>
      <h1>Online Resume</h1>
      <p>TypeScript + Vite, deployed with Firebase Hosting.</p>
    </main>
  `;
}
