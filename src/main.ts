import "./style.css";
import { initRouter } from "./router";

initRouter();

// Loaded separately so the page content shows before the particle library downloads
import("./background").then(({ initBackground }) => initBackground());
