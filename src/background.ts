import { tsParticles, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// People with "reduce motion" turned on get the network as a still image
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A muted slate that reads on both the light and dark page backgrounds
const color = "#7c8aa5";

const options: ISourceOptions = {
  // Fixed canvas covering the window, drawn behind the page content
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: "transparent" },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    // 60 particles per 1000x1000px of screen, so phones get fewer
    // (about 20 on a phone, 80 on a laptop, 120 on a 1080p monitor)
    number: { value: 60, density: { enable: true, width: 1000, height: 1000 } },
    paint: { color: { value: color } },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 2.5 } },
    links: {
      enable: true,
      color,
      distance: 140,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: !reduceMotion,
      speed: 0.6,
      outModes: { default: "bounce" },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      // Draws links from nearby particles to the mouse pointer
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.5 } },
    },
  },
};

export async function initBackground() {
  await loadSlim(tsParticles);
  await tsParticles.load({ id: "background", options });
}
