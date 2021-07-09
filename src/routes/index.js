import Header from "../components/Header";
import Results from "../views/Results/Results";

const routes = {
  "/": Results
}

//ROUTER
const router = async (route) => {
  const header = null || document.getElementById("header-home");
  header.innerHTML = await Header();
  const content = null || document.getElementById("content");
  content.innerHTML = await Results();
};

export default router;