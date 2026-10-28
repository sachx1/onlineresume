// Resume PDF download link, shown only once the file actually exists.
// Drop the PDF into public/ with this exact name and the buttons appear on their own.
// (Without the check, a missing file would download the home page instead: the site
// sends every unknown URL to index.html.)
export const RESUME_PDF = "/Sachin_Khargie_Resume.pdf";

// Checked once per visit, then reused by every page
let available: Promise<boolean> | undefined;

function resumeExists(): Promise<boolean> {
    available ??= fetch(RESUME_PDF, { method: "HEAD" })
        .then(res => res.ok && (res.headers.get("content-type") ?? "").includes("pdf"))
        .catch(() => false);
    return available;
}

// Un-hides every element marked data-resume inside the given container, if the PDF exists
export async function revealResumeLinks(container: HTMLElement) {
    if (await resumeExists()) {
        container.querySelectorAll<HTMLElement>("[data-resume]").forEach(el => { el.hidden = false; });
    }
}
