import router from "./routes/index";

window.addEventListener("load", router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
});