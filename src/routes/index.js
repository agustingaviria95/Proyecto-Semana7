//Componentes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Vistas
import Homepage from "../views/Content_browser/Content_browser";
import Results from "../views/Results/Results";

const router = (route) => {
  //componentes
  const header = null || document.getElementById("header");
  header.innerHTML = Header();

  const footer = null || document.getElementById("footer");
  footer.innerHTML = Footer();

  //views
  const content = null || document.getElementById("content");
  if (route === "") {
    content.innerHTML = Homepage();
  }
  if (route === "#inicio") {
    content.innerHTML = Homepage();
  }
  if (route === "#results") {
    content.innerHTML = Results();
  }
}

export default router;