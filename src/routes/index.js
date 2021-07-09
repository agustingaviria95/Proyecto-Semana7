import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import Content_browser from "../views/Content_browser/Content_browser";
import Results from "../views/Results/Results"
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Content_browser,
  "/resultados": Results
}

//ROUTER
const router = async () => {
  const header = null || document.getElementById("header-home");
  header.innerHTML = await Header();
  const content = null || document.getElementById("content");
  content.innerHTML = await Content_browser();
  const footer = null || document.getElementById("footer");
  footer.innerHTML = await Footer();
};

export default router;