//Componentes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Vistas
import Homepage from "../views/Content_browser/Content_browser";
import Results from "../views/Results/Results";

const router = async (route) => {
  //componentes
  const header = null || document.getElementById("header-home");
  header.innerHTML = await Header();

  const footer = null || document.getElementById("footer");
  footer.innerHTML = await Footer();

  //views
  const container = null || document.getElementById("content");
  if (route === "") {
    container.innerHTML = await Homepage();
  }
  if (route === "#inicio") {
    container.innerHTML = await Homepage();
  }
  if (route === "#results") {
    container.innerHTML = await Results();
  }
}

export default router;