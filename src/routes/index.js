import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Content_browser from "../views/Content_browser/Content_browser";

const routes = {
  "/": Content_browser
}

//ROUTER
const router = async (route) => {
  const header = null || document.getElementById("header-home");
  header.innerHTML = await Header();
  const content = null || document.getElementById("Content_browser");
  content.innerHTML = await Content_browser();
};

export default router;