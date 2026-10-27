import { techIcons } from "./data/techIcons";

// One technology as a pill: its icon (when there is one) followed by its name.
// Shared by every page that lists technologies, so they all look the same.
export function techChip(name: string): string {
    const icon = techIcons[name];
    const img = icon
        ? `<img class="tech-icon${icon.mono ? " mono" : ""}" src="${icon.src}" alt="" width="18" height="18">`
        : "";
    return `<li class="tech-chip">${img}${name}</li>`;
}
