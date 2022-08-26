if ("serviceWorker" in navigator) {
  window.addEventListener("load", (ev) => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

import "./index";
