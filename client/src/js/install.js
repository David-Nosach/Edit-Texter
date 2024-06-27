const butInstall = document.getElementById("buttonInstall");

// Event listener for beforeinstallprompt event to handle PWA installation
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false); // Show install button
});

// Event listener for install button click to prompt PWA installation
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true); // Hide install button after installation
});

// Event listener for appinstalled event to reset deferredPrompt after installation
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
