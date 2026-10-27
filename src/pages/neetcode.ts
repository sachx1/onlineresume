import Typed from "typed.js";
import { navigate } from "../router";

let neet: Typed | undefined;

export function Neetcode (container: HTMLElement) {
    container.innerHTML = `
        <div class="page-header">
            <button type="button" id="home-mode" class="nav-button"><span class="arrow" aria-hidden="true">←</span>Home</button>
            <h1><span id="neet"></span></h1>
        </div>
    `

    neet?.destroy();
    neet = new Typed("#neet", {
            strings: ["Neetcode under construction"],
            typeSpeed: 60,
            loop: false,
        });
    
    // HTML Button Elements hooked up to event listener to go back to the home page
    container.querySelector<HTMLButtonElement>('#home-mode')!.addEventListener('click', () => {
        navigate('/')
    })
}