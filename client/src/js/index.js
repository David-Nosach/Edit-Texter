import { Workbox } from "workbox-window";
import Editor from "./editor"; // Import the Editor class from './editor'
import "./database"; // Import the database functionalities
import "../css/style.css"; // Import the CSS styles for the application

const main = document.querySelector("#main");
main.innerHTML = "";

// Function to create and append a loading spinner to the main element
const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor(); // Instantiate the Editor class

// If editor is not properly instantiated, show a loading spinner
if (typeof editor === "undefined") {
  loadSpinner();
}

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox("/src-sw.js");
  workboxSW.register();
} else {
  console.error("Service workers are not supported in this browser.");
}
