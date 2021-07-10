//Componentes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Vistas
import Homepage from "../views/Content_browser/Content_browser";
import Results from "../views/Results/Results";

const router = async (route) => {
  //componentes
  const header = null || document.getElementById("header");
  header.innerHTML = await Header();

  const footer = null || document.getElementById("footer");
  footer.innerHTML = await Footer();

  //views
  const content = null || document.getElementById("content");
  if (route === "") {
    content.innerHTML = await Homepage();
  }
  if (route === "#inicio") {
    content.innerHTML = await Homepage();
  }
  if (route === "#results") {
    content.innerHTML = await Results();
  }
}

export default router;