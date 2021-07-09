import img from "../../assets/img/LOGO 1.5.png";

const Header = () => {
  const view = `
        <span class="header-home-img"><img src="${img}" alt="Logo Scifi Site"></span>
        <span><a href="#">Ir a Sci-Fi Site</a></span>
    `;
  return view;
};

export default Header;