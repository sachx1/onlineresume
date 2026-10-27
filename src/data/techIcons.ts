// Icons for the technologies listed in resume.ts and projects.ts.
// Logos come from Devicon (https://devicon.dev); browse there to find the file name for a new one.
// Logos Devicon doesn't have are saved in src/assets/icons.
// Vite turns each .svg import into a URL string that can go in an <img src>.
import nodejs from "devicon/icons/nodejs/nodejs-original.svg";
import twilio from "devicon/icons/twilio/twilio-original.svg";
import sqlServer from "devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg";
import python from "devicon/icons/python/python-original.svg";
import javascript from "devicon/icons/javascript/javascript-original.svg";
import html5 from "devicon/icons/html5/html5-original.svg";
import json from "devicon/icons/json/json-original.svg";
import flask from "devicon/icons/flask/flask-original.svg";
import threejs from "devicon/icons/threejs/threejs-original.svg";
import firebase from "devicon/icons/firebase/firebase-original.svg";
import aws from "devicon/icons/amazonwebservices/amazonwebservices-plain.svg";
import typescript from "devicon/icons/typescript/typescript-original.svg";
import vite from "devicon/icons/vitejs/vitejs-original.svg";
import googleMaps from "../assets/icons/googlemaps.svg";
// Generic icons for technologies without a logo of their own
import database from "../assets/icons/database.svg";
import pipeline from "../assets/icons/pipeline.svg";

export interface TechIcon {
  src: string;
  mono?: boolean; // black logo: inverted to white in dark mode so it stays visible
}

// Keys must match the names in each technologies list exactly (including capitals)
export const techIcons: Record<string, TechIcon> = {
  "Node.js": { src: nodejs },
  "Twilio": { src: twilio },
  "SQL Server": { src: sqlServer },
  "Microsoft Fabric": { src: database, mono: true },
  "SQL": { src: database, mono: true },
  "Stored procedures": { src: database, mono: true },
  "Python": { src: python },
  "JavaScript": { src: javascript },
  "JavaScript (ES6)": { src: javascript },
  "TypeScript": { src: typescript },
  "Vite": { src: vite },
  "HTML/CSS": { src: html5 },
  "Google Maps JavaScript API": { src: googleMaps },
  "Google Maps API": { src: googleMaps },
  "JSON": { src: json, mono: true },
  "Flask": { src: flask, mono: true },
  "Three.js": { src: threejs, mono: true },
  "Firebase": { src: firebase },
  "Google Firebase": { src: firebase },
  "AWS S3": { src: aws },
  "CI/CD": { src: pipeline, mono: true },
};
