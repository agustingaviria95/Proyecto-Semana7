import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import Content_browser from "../assets/views/Content_browser";const routes = {
  "/": Content_browser
}//ROUTER
const router = async () => {
  const header = null || document.getElementById("header-home");
  header.innerHTML = await Header();
  const Content_browser = null || document.getElementById("Content_browser");
  Content_browser.innerHTML = await Content_browser();
};

export default router;