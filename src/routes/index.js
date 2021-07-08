import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../views/Home/Home";

const routes = {
  "/": Home
}

//ROUTER
const router = async (route) => {
  const header = null || document.getElementById("header-home");
  header.innerHTML = await Header();
  const content = null || document.getElementById("content");
  content.innerHTML = await Home();
};

export default router;