import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";


//ROUTER
const router = async (route) => {
  console.log(route);
  const header = null || document.getElementById("header-home");
  console.log(header);
  header.innerHTML = await Header();
};

export default router;