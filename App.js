import "./assets/styles.css";
import router from "./routes";

window.addEventListener("load", router(window.location.hash));
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
