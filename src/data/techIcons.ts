// Icons for the technologies listed in resume.ts.
// Logos come from Devicon (https://devicon.dev); browse there to find the file name for a new one.
// Vite turns each .svg import into a URL string that can go in an <img src>.
import nodejs from "devicon/icons/nodejs/nodejs-original.svg";
import twilio from "devicon/icons/twilio/twilio-original.svg";
import sqlServer from "devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg";
import python from "devicon/icons/python/python-original.svg";
import javascript from "devicon/icons/javascript/javascript-original.svg";
import html5 from "devicon/icons/html5/html5-original.svg";
import google from "devicon/icons/google/google-original.svg";
import json from "devicon/icons/json/json-original.svg";
import flask from "devicon/icons/flask/flask-original.svg";
import threejs from "devicon/icons/threejs/threejs-original.svg";
import firebase from "devicon/icons/firebase/firebase-original.svg";
import aws from "devicon/icons/amazonwebservices/amazonwebservices-plain.svg";
// Generic icons for technologies without a logo of their own
import database from "../assets/icons/database.svg";
import pipeline from "../assets/icons/pipeline.svg";

export interface TechIcon {
  src: string;
  mono?: boolean; // black logo: inverted to white in dark mode so it stays visible
}

// Keys must match the names in each job's technologies list exactly
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
  "HTML/CSS": { src: html5 },
  "Google Maps JavaScript API": { src: google },
  "JSON": { src: json, mono: true },
  "Flask": { src: flask, mono: true },
  "Three.js": { src: threejs, mono: true },
  "Firebase": { src: firebase },
  "AWS S3": { src: aws },
  "CI/CD": { src: pipeline, mono: true },
};
