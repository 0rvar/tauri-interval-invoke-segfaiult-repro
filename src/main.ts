import { invoke } from "@tauri-apps/api/tauri";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
});

setInterval(async () => {
  if (greetMsgEl && greetInputEl) {
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}, 1000);
